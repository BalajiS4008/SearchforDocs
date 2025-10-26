// Centralized MDX heading indexing to support fast search and pre-warming at app start
// This runs in the browser with Vite. It loads MDX files as raw text and parses h2/h3 headings.

export interface RouteItemLike {
  id?: string;
  pid?: string;
  name: string;
  hasChildren?: boolean;
  // optional metadata used in some routes
  category?: string;
  component?: any;
}

export interface HeadingEntry {
  basePath: string; // navigable base path for the page
  label: string;    // heading text
  path: string;     // basePath#id
}

function slugifySegment(s: string): string {
  return (s || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function slugifyHeadingId(text: string): string {
  return (text || '')
    .trim()
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+=|{}\[\]\\:\";'<>?,./]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildPathForRoute(route: RouteItemLike, allRoutes: RouteItemLike[]): string {
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

// Vite glob of all mdx as raw strings
// Include both absolute and relative patterns for robustness across setups
const mdxRawLoaders: Record<string, () => Promise<string>> = {
  ...(import.meta as any).glob('/src/**/*.mdx', { as: 'raw' }),
  ...(import.meta as any).glob('./**/*.mdx', { as: 'raw' })
} as any;

function allMdxPaths(): string[] {
  return Object.keys(mdxRawLoaders);
}

function resolveMdxPathForRoute(route: RouteItemLike, allRoutes: RouteItemLike[]): string | null {
  const nameSlug = slugifySegment(route.name);
  const parent = route.pid ? allRoutes.find(r => r.id === route.pid) : undefined;
  const parentSlug = parent ? slugifySegment(parent.name) : '';
  const candidatesByPriority: ((p: string) => boolean)[] = [
    (p) => parentSlug && p.endsWith(`/${parentSlug}/${nameSlug}/index.mdx`),
    (p) => parentSlug && p.endsWith(`/${parentSlug}/${nameSlug}.mdx`),
    (p) => p.endsWith(`/components/${nameSlug}/index.mdx`),
    (p) => p.endsWith(`/components/${nameSlug}.mdx`),
    (p) => p.endsWith(`/${nameSlug}/index.mdx`),
    (p) => p.endsWith(`/${nameSlug}.mdx`),
  ];
  const paths = allMdxPaths();
  for (const match of candidatesByPriority) {
    const found = paths.find(match);
    if (found) return found;
  }
  return null;
}

function parseHeadingsFromMarkdown(markdown: string): { level: 1 | 2 | 3; text: string }[] {
  const out: { level: 1 | 2 | 3; text: string }[] = [];
  const lines = markdown.split(/\r?\n/);
  for (const line of lines) {
    if (line.startsWith('# ')) out.push({ level: 1, text: line.replace(/^#\s+/, '').trim() as string });
    else if (line.startsWith('## ')) out.push({ level: 2, text: line.replace(/^##\s+/, '').trim() as string });
    else if (line.startsWith('### ')) out.push({ level: 3, text: line.replace(/^###\s+/, '').trim() as string });
  }
  return out;
}

let indexReady = false;
const headingCache = new Map<string, HeadingEntry[]>(); // basePath -> entries

export function isSearchIndexReady(): boolean {
  return indexReady;
}

export async function preIndexHeadings(routes: RouteItemLike[]): Promise<void> {
  try {
    const pages = routes.filter(r => (r as any).component);
    for (const r of pages) {
      const basePath = buildPathForRoute(r, routes);
      if (headingCache.has(basePath)) continue;
      const candidates = guessMdxPathsForRoute(r, routes);
      if (!candidates.length) continue;

      let content: string | null = null;
      for (const p of candidates) {
        const loader = mdxRawLoaders[p];
        if (!loader) continue;
        try {
          content = await loader();
          if (content) break;
        } catch {
          // try next
        }
      }
      if (!content) continue;

      const headings = parseHeadingsFromMarkdown(content);
      const mapped: HeadingEntry[] = headings.map(h => ({
        basePath,
        label: h.text,
        path: `${basePath}#${slugifyHeadingId(h.text)}`,
      }));
      headingCache.set(basePath, mapped);
    }
    indexReady = true;
  } catch {
    // Leave indexReady as-is on error
  }
}

export function queryCrossPageHeadings(term: string): HeadingEntry[] {
  const t = (term || '').trim().toLowerCase();
  if (!t) return [];
  const out: HeadingEntry[] = [];
  for (const entries of headingCache.values()) {
    for (const e of entries) {
      if (e.label.toLowerCase().includes(t)) out.push(e);
    }
  }
  return out;
}
