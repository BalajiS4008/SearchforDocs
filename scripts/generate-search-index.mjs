#!/usr/bin/env node
// Build-time MDX heading indexer
// Scans src/**/*.mdx, extracts h1/h2/h3 headings, derives page paths, and writes public/search-index.json

import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

const workspaceRoot = process.cwd();
const SRC_DIR = path.join(workspaceRoot, 'src');
const OUT_DIR = path.join(workspaceRoot, 'public');
const OUT_FILE = path.join(OUT_DIR, 'search-index.json');

function normalizeSlashes(p) {
  return p.replace(/\\/g, '/');
}

function slugifySegment(s) {
  return (s || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function slugifyHeadingId(text) {
  return (text || '')
    .trim()
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+=|{}\[\]\\:\";'<>?,./]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function tryRouteSlugForComponentDir(dirAbs) {
  // Look for a sibling routes.tsx and try to extract the route name under pid: 'components'
  try {
    const routesFile = path.join(dirAbs, 'routes.tsx');
    const text = await fs.readFile(routesFile, 'utf8');
    // Find entries like: { id: '...', pid: 'components', name: 'Form', hasChildren: false, component: <... /> }
    const routeRegex = /\{[^\}]*pid\s*:\s*['\"]components['\"][^\}]*name\s*:\s*['\"]([^'\"]+)['\"][^\}]*\}/g;
    let m;
    let nameCandidate = null;
    while ((m = routeRegex.exec(text))) {
      const block = m[0];
      // Prefer leaf page (hasChildren: false) if present in the same block
      const hasChildrenFalse = /hasChildren\s*:\s*false/.test(block);
      const nameVal = m[1];
      if (hasChildrenFalse) { nameCandidate = nameVal; break; }
      if (!nameCandidate) nameCandidate = nameVal;
    }
    if (nameCandidate) return '/' + slugifySegment(nameCandidate);
  } catch {
    // ignore
  }
  return null;
}

async function deriveBasePath(absoluteFile) {
  const rel = normalizeSlashes(path.relative(SRC_DIR, absoluteFile));
  // If this is .../components/<x>/index.mdx, prefer route slug from routes.tsx
  const isComponentIndex = /^(components\/[^/]+)\/index\.mdx$/i.test(rel);
  if (isComponentIndex) {
    const dirRel = rel.replace(/\/index\.mdx$/i, '');
    const dirAbs = path.join(SRC_DIR, dirRel);
    const routeSlug = await tryRouteSlugForComponentDir(dirAbs);
    if (routeSlug) return routeSlug;
  }

  let noExt = rel.replace(/\.mdx$/i, '');
  // If ends with /index, remove index
  if (/\/index$/i.test(noExt)) {
    noExt = noExt.replace(/\/index$/i, '');
  }
  // Ensure leading slash
  return '/' + normalizeSlashes(noExt).replace(/^\/+/, '');
}

function parseHeadings(markdown) {
  const lines = markdown.split(/\r?\n/);
  const out = [];
  for (const line of lines) {
    if (line.startsWith('# ')) out.push({ level: 1, text: line.replace(/^#\s+/, '').trim() });
    else if (line.startsWith('## ')) out.push({ level: 2, text: line.replace(/^##\s+/, '').trim() });
    else if (line.startsWith('### ')) out.push({ level: 3, text: line.replace(/^###\s+/, '').trim() });
  }
  return out;
}

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir);
  } catch (e) {
    // ignore if exists
  }
}

// Parse routes to map MDX files to friendly slugs based on route hierarchy
async function buildRoutesIndex() {
  const routesFiles = await glob('src/**/routes.tsx', { nodir: true, cwd: workspaceRoot, absolute: true });
  /** @type {Record<string,string>} */
  const constToMdx = {}; // ComponentConstName -> mdx relative path like components/grid/validation.mdx
  /** @type {Record<string,{id:string,pid?:string,name:string,componentConst?:string}>} */
  const byId = {};

  for (const rf of routesFiles) {
    let text;
    try { text = await fs.readFile(rf, 'utf8'); } catch { continue; }
    // capture: const ValidationContent = lazy(() => import('./validation.mdx'));
    const importRe = /const\s+(\w+)\s*=\s*lazy\s*\(\s*\(\)\s*=>\s*import\(\s*['\"](.+?\.mdx)['\"]\s*\)\s*\)\s*;?/g;
    let m;
    while ((m = importRe.exec(text))) {
      const constName = m[1];
      const mdxRel = normalizeSlashes(path.relative(SRC_DIR, path.join(path.dirname(rf), m[2])));
      constToMdx[constName] = mdxRel.replace(/^\/+/, '');
    }

    // capture route objects: { id: 'x', pid: 'y', name: 'Z', component: <ValidationContent /> }
    const objRe = /\{[^}]*id\s*:\s*['\"]([^'\"]+)['\"][^}]*name\s*:\s*['\"]([^'\"]+)['\"][^}]*\}/g;
    let o;
    while ((o = objRe.exec(text))) {
      const objText = o[0];
      const idMatch = objText.match(/id\s*:\s*['\"]([^'\"]+)['\"]/);
      const pidMatch = objText.match(/pid\s*:\s*['\"]([^'\"]+)['\"]/);
      const nameMatch = objText.match(/name\s*:\s*['\"]([^'\"]+)['\"]/);
      const compMatch = objText.match(/component\s*:\s*<\s*(\w+)\s*\/>/);
      if (!idMatch || !nameMatch) continue;
      const id = idMatch[1];
      const pid = pidMatch ? pidMatch[1] : undefined;
      const name = nameMatch[1];
      const componentConst = compMatch ? compMatch[1] : undefined;
      byId[id] = { id, pid, name, componentConst };
    }
  }

  // Build path for nodes with component
  /** @type {Record<string,string>} */
  const mdxToFriendlyBase = {};
  for (const id of Object.keys(byId)) {
    const node = byId[id];
    if (!node.componentConst) continue;
    const mdxRel = constToMdx[node.componentConst];
    if (!mdxRel) continue;
    const segments = [];
    // Walk up parents collecting names (stop before pid === 'components' root marker)
    let cur = node;
    while (cur) {
      if (cur.name && cur.name !== 'Components') segments.push(slugifySegment(cur.name));
      if (!cur.pid) break;
      const next = byId[cur.pid];
      if (!next) break;
      if (next.id === 'components') { cur = null; break; }
      cur = next;
    }
    segments.reverse();
    const basePath = '/' + segments.join('/');
    mdxToFriendlyBase[normalizeSlashes(mdxRel).replace(/\.mdx$/i, '')] = basePath;
  }
  return mdxToFriendlyBase;
}

async function buildIndex() {
  const files = await glob('src/**/*.mdx', { nodir: true, cwd: workspaceRoot, absolute: true });
  const docs = [];
  const routeMap = await buildRoutesIndex();

  for (const file of files) {
    let content;
    try {
      content = await fs.readFile(file, 'utf8');
    } catch {
      continue;
    }
    const relNoExt = normalizeSlashes(path.relative(SRC_DIR, file)).replace(/\.mdx$/i, '');
    // Temporary fallback fix for any missed grid mappings
    let basePath = routeMap[relNoExt] || await deriveBasePath(file);
    if (basePath.startsWith('/components/grid/')) {
      // Specific known correction: remotedatabinding -> /data-grid/data-binding/remote-data
      if (relNoExt === 'components/grid/remotedatabinding') {
        basePath = '/data-grid/data-binding/remote-data';
      }
    }
    const headings = parseHeadings(content);

    const mapped = headings.map(h => {
      const id = slugifyHeadingId(h.text);
      const pathWithHash = `${basePath}#${id}`;
      return { level: h.level, text: h.text, id, path: pathWithHash };
    });

    const title = headings.find(h => h.level === 1)?.text || path.basename(basePath);

    docs.push({ basePath, title, headings: mapped });
  }

  const payload = { version: 1, generatedAt: new Date().toISOString(), docs };
  await ensureDir(OUT_DIR);
  await fs.writeFile(OUT_FILE, JSON.stringify(payload, null, 2), 'utf8');
  return { count: docs.length, outFile: OUT_FILE };
}

buildIndex()
  .then((r) => {
    console.log(`search-index: Indexed ${r.count} MDX docs -> ${normalizeSlashes(r.outFile)}`);
  })
  .catch((err) => {
    console.error('search-index: failed to generate index');
    console.error(err?.stack || err);
    process.exit(0); // Non-blocking to not break dev if index fails
  });
