// Centralized search index that loads a prebuilt JSON (generated at build/dev start)
// The JSON lives in public/search-index.json and contains page base paths, titles, and h1/h2/h3 headings.

export interface RouteItemLike {
  id?: string;
  pid?: string;
  name: string;
  hasChildren?: boolean;
  category?: string;
  component?: any;
}

export interface JsonHeading {
  level: number; // 1|2|3
  text: string;
  id: string;
  path: string; // basePath#id
}

export interface JsonDoc {
  basePath: string;
  title: string;
  headings: JsonHeading[];
}

export interface JsonIndex {
  version: number;
  generatedAt: string;
  docs: JsonDoc[];
}

// Unified search entry returned to UI
export interface SearchEntry {
  type: 'page' | 'heading';
  basePath: string;
  label: string; // title for page or heading text
  path: string;  // navigable path (basePath or basePath#id)
}

export interface HeadingEntry {
  basePath: string;
  label: string;
  path: string;
}

let loaded = false;
let idx: JsonIndex | null = null;

// simple ranking helpers
function scoreTextMatch(text: string, term: string): number {
  const t = term.toLowerCase();
  const x = text.toLowerCase();
  if (x === t) return 100;
  if (x.startsWith(t)) return 80;
  if (x.includes(` ${t}`)) return 70;
  if (x.includes(t)) return 60;
  return 0;
}

export function isSearchIndexReady(): boolean {
  return loaded && !!idx;
}

async function loadJsonIndex(): Promise<void> {
  if (loaded) return;
  try {
    const res = await fetch('/search-index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as JsonIndex;
    idx = json;
    loaded = true;
  } catch (e) {
    // If the file is missing (e.g., first run), keep loaded=false so callers can retry later
    console.warn('search-index: could not load prebuilt index. Run "node scripts/generate-search-index.mjs".');
    loaded = false;
    idx = null;
  }
}

export async function preIndexHeadings(_routes: RouteItemLike[]): Promise<void> {
  await loadJsonIndex();
}

// New: query pages (titles) and headings across all docs
export function queryAll(term: string, max = 50): SearchEntry[] {
  const q = (term || '').trim();
  if (!q || !idx) return [];

  const pageHits: SearchEntry[] = [];
  const headingHits: SearchEntry[] = [];

  for (const d of idx.docs) {
    const ps = scoreTextMatch(d.title, q);
    if (ps > 0) {
      pageHits.push({ type: 'page', basePath: d.basePath, label: d.title, path: d.basePath });
    }
    for (const h of d.headings) {
      const hs = scoreTextMatch(h.text, q);
      if (hs > 0) headingHits.push({ type: 'heading', basePath: d.basePath, label: h.text, path: h.path });
    }
  }

  // Sort within groups by relevance then label length for stability
  pageHits.sort((a, b) =>
    scoreTextMatch(b.label, q) - scoreTextMatch(a.label, q) || a.label.length - b.label.length
  );
  headingHits.sort((a, b) =>
    scoreTextMatch(b.label, q) - scoreTextMatch(a.label, q) || a.label.length - b.label.length
  );

  return [...headingHits, ...pageHits].slice(0, max);
}

export function queryCrossPageHeadings(term: string): HeadingEntry[] {
  // Backward-compat: filter only heading results from queryAll
  const results = queryAll(term).filter(r => r.type === 'heading');
  return results.map(r => ({ basePath: r.basePath, label: r.label, path: r.path }));
}

// Optional helpers, retained to avoid breaking imports elsewhere
function slugifySegment(s: string): string {
  return (s || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function buildPathForRoute(route: RouteItemLike, allRoutes: RouteItemLike[]): string {
  let path: string;
  if (route.pid) {
    const parentRoute = allRoutes.find(r => r.id === route.pid);
    if (parentRoute) {
      const grandparentRoute = parentRoute.pid ? allRoutes.find(r => r.id === parentRoute.pid) : null;
      if (grandparentRoute && grandparentRoute.pid === 'components' && grandparentRoute.hasChildren) {
        path = `/${slugifySegment(grandparentRoute.name)}/${slugifySegment(parentRoute.name)}/${slugifySegment(route.name)}`;
      } else if (parentRoute.pid === 'components' && parentRoute.hasChildren) {
        path = `/${slugifySegment(parentRoute.name)}/${slugifySegment(route.name)}`;
      } else if (parentRoute.name !== 'Components') {
        path = `/${slugifySegment(parentRoute.name)}/${slugifySegment(route.name)}`;
      } else {
        path = `/${slugifySegment(route.name)}`;
      }
    } else {
      path = `/${slugifySegment(route.name)}`;
    }
  } else {
    path = `/${slugifySegment(route.name)}`;
  }
  return path;
}
