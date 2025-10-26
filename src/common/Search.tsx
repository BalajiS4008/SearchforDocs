import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dialog } from '@syncfusion/react-popups';
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { useLocation, useNavigate } from 'react-router';
import { SearchIcon } from "@syncfusion/react-icons"
import { preIndexHeadings, queryCrossPageHeadings, isSearchIndexReady, SearchEntry, queryAll } from './search-index';

export interface RouteItemLike {
  id?: string;
  pid?: string;
  name: string;
  hasChildren?: boolean;
}

export interface SearchProps {
  routes: RouteItemLike[];
}

interface SearchResult {
  type: 'page' | 'heading';
  label: string;
  path: string; // full navigable path including hash if any
  highlight?: string;
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

// Path building for routes is no longer required for results; paths come from the JSON index
function buildPathForRoute(route: RouteItemLike, allRoutes: RouteItemLike[]): string {
  let path: string;
  const routeAny = route as any;
  if (routeAny.pid) {
    const parentRoute = allRoutes.find(r => r.id === routeAny.pid);
    if (parentRoute) {
      const grandparentRoute = (parentRoute as any).pid
        ? allRoutes.find(r => r.id === (parentRoute as any).pid)
        : null;
      if (grandparentRoute && (grandparentRoute as any).pid === 'components' && (grandparentRoute as any).hasChildren) {
        path = `/${slugifySegment((grandparentRoute as any).name)}/${slugifySegment((parentRoute as any).name)}/${slugifySegment(route.name)}`;
      } else if ((parentRoute as any).pid === 'components' && (parentRoute as any).hasChildren) {
        path = `/${slugifySegment((parentRoute as any).name)}/${slugifySegment(route.name)}`;
      } else if ((parentRoute as any).name !== 'Components') {
        path = `/${slugifySegment((parentRoute as any).name)}/${slugifySegment(route.name)}`;
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

function useDebounced<T>(value: T, delay = 200): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// Indexing logic moved to ./search-index to run at app start and to keep this component lean.

export const Search: React.FC<SearchProps> = React.memo(({ routes }) => {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounced(term.trim().toLowerCase(), 150);
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Cross-page heading results/state
  const [crossPageHeadingResults, setCrossPageHeadingResults] = useState<SearchResult[]>([]);
  const [loadingCrossHeadings, setLoadingCrossHeadings] = useState(false);

  // Removed local pageResults and DOM-based headingResults; use prebuilt JSON index only
  const pageResults: SearchResult[] = useMemo(() => [], []);
  const headingResults: SearchResult[] = useMemo(() => [], []);

  // Preload the global heading index once (on first open of search or app mount)
  useEffect(() => {
    let cancelled = false;
    async function ensureIndex() {
      if (isSearchIndexReady()) return;
      try {
        await preIndexHeadings(routes as any);
      } catch {
        // ignore
      }
      if (!cancelled) {
        // no state to set; index lives in module singleton
      }
    }
    // Option 1: pre-index on app load; here we run once when this component mounts
    ensureIndex();
    return () => { cancelled = true; };
  }, [routes]);

  // Query JSON index (pages + headings) whenever the debounced term changes
  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!debouncedTerm) {
        setCrossPageHeadingResults([]);
        return;
      }
      setLoadingCrossHeadings(true);
      try {
        if (!isSearchIndexReady()) {
          await preIndexHeadings(routes as any);
        }
        const entries = queryAll(debouncedTerm);
        if (!cancelled) {
          const mapped: SearchResult[] = entries.map(e => ({ type: e.type, label: e.label, path: e.path }));
          setCrossPageHeadingResults(mapped);
        }
      } finally {
        if (!cancelled) setLoadingCrossHeadings(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [debouncedTerm, routes]);

  const results: SearchResult[] = useMemo(() => {
    if (!debouncedTerm) return [] as SearchResult[];
    // Now entirely driven by prebuilt JSON index
    return crossPageHeadingResults.slice(0, 50);
  }, [crossPageHeadingResults, debouncedTerm]);

  const onSelect = useCallback((res: SearchResult) => {
    setOpen(false);
    setTerm('');
    // Navigate; let router handle hash scroll elsewhere
    navigate(res.path);
  }, [navigate]);

  const onDialogOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onDialogClose = useCallback(() => {
    setOpen(false);
    setTerm('');
  }, []);

  useEffect(() => {
    if (open) {
      // Focus input when dialog opens
      const t = setTimeout(() => {
        (containerRef.current?.querySelector('input') as HTMLInputElement | null)?.focus();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  const onTextChange = useCallback((args?: TextBoxChangeEvent) => {
    if (args && args.value !== undefined) {
      setTerm(args.value);
    }
  }, []);

  return (
    <div className="search-root" ref={containerRef}>
      <div>
        <button
          className="icon-button theme-toggle"
          onClick={onDialogOpen}
          aria-label="Open search"
        ><SearchIcon /><span id="search-label">Search</span></button>
        {/* <Button onClick={onDialogOpen} aria-label="Open search" color={Color.Primary} variant={Variant.Outlined} icon={<SearchIcon/>} >Search</Button> */}
      </div>
      <Dialog
      id='search-container'
        header="Search"
        open={open}
        onClose={onDialogClose}
        style={{ maxWidth: Math.min(window.innerWidth - 40, 640), width: '90%', height: '50%' }}
      >
        <div className="search-dialog-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <TextBox
            placeholder="Search titles and headings"
            value={term}
            onChange={onTextChange}
            labelMode="Auto"
            aria-label="Search input"
          />

          {debouncedTerm.length === 0 ? (
            <div role="status" aria-live="polite" style={{ color: 'var(--muted-text, #6b7280)' }}>Type to search…</div>
          ) : results.length === 0 ? (
            <div role="status" aria-live="polite">{loadingCrossHeadings ? 'Searching…' : 'No results found'}</div>
          ) : (
            <div role="list" className="search-results sb-scrollbar" style={{ maxHeight: 360, overflow: 'auto' }}>
              {results.map((r, i) => (
                <button
                  key={r.path + i}
                  role="listitem"
                  className="search-result-item icon-button theme-toggle"
                  onClick={() => onSelect(r)}
                  style={{
                    display: 'flex',
                    width: '100%',
                    textAlign: 'left',
                    gap: 8,
                    padding: '18px 10px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    borderRadius: 2,
                    background: 'transparent',
                    fontSize: '1rem'
                  }}
                >
                  <span style={{ fontSize: 12, opacity: 0.7, minWidth: 64 }}>
                    {r.type === 'heading' ? 'Heading' : 'Page'}
                  </span>
                  <span style={{ flex: 1 }}>{r.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
});

export default Search;
