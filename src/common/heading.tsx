// src/utils/offscreenHeadings.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

export type HeadingEntry = {
  heading: string;
  id: string | null;
  level: 2 | 3;
};

type ReadOptions = {
  /** ms to wait for a component to render before timing out (default 1200ms) */
  timeoutMs?: number;
  /** allow passing a prop name to indicate headless/offscreen render to page components */
  headlessPropName?: string; // default "__headless"
  /** max time to wait after render for DOM paint (default 40ms) */
  postRenderDelayMs?: number;
};

/**
 * Mounts a react component offscreen, waits briefly, reads h2/h3 elements, unmounts.
 * - Injects a prop named `headlessPropName`=true so components that guard effects can skip.
 * - Uses a per-mount timeout to avoid hangs.
 *
 * NOTE: mounting arbitrary route components *will* run their lifecycle and effects unless
 * those components are coded to early-return when they detect the injected headless prop.
 */
export async function readHeadingsFromComponent(
  Component: React.ComponentType<any>,
  props: Record<string, any> = {},
  opts: ReadOptions = {}
): Promise<HeadingEntry[]> {
  const { timeoutMs = 1200, headlessPropName = '__headless', postRenderDelayMs = 40 } = opts;

  return new Promise<HeadingEntry[]>((resolve) => {
    // create offscreen container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.overflow = 'hidden';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);

    let finished = false;
    const root = ReactDOM.createRoot(container);

    const cleanup = () => {
      try {
        root.unmount();
      } catch (e) {
        // ignore
      }
      if (container.parentNode) container.parentNode.removeChild(container);
    };

    const doResolve = (res: HeadingEntry[]) => {
      if (finished) return;
      finished = true;
      cleanup();
      resolve(res);
    };

    // safety timeout - if component doesn't stabilize, bail out
    const to = window.setTimeout(() => {
      doResolve([]);
    }, timeoutMs);

    try {
      // render injecting headless prop so pages can guard heavy effects
      const injectedProps = { ...(props || {}), [headlessPropName]: true };
      root.render(React.createElement(Component, injectedProps));

      // wait a tick for DOM and microtasks to finish, plus a small delay to allow client rendering
      // attempt a robust wait with requestAnimationFrame + timeout fallback
      const scheduleRead = () => {
        // give browser a frame then a short delay
        requestAnimationFrame(() => {
          setTimeout(() => {
            try {
              const nodes = Array.from(container.querySelectorAll('h2, h3')) as HTMLElement[];
              const out = nodes.map((n) => ({
                heading: (n.textContent || '').trim(),
                id: n.id || null,
                level: n.tagName === 'H2' ? 2 : 3
              }));
              window.clearTimeout(to);
              doResolve(out);
            } catch (err) {
              window.clearTimeout(to);
              doResolve([]);
            }
          }, postRenderDelayMs);
        });
      };

      // schedule the read
      scheduleRead();
    } catch (err) {
      window.clearTimeout(to);
      doResolve([]);
    }
  });
}

/**
 * Helper to process routes in batches with concurrency and time-slicing to avoid freeze.
 *
 * - `routes` array with elements that have `.component` property (React component).
 * - `buildPathFn` should return final navigable path (string) for a given route item.
 *
 * Options:
 * - concurrency: # of components to mount in parallel (default 2)
 * - perMountTimeout: timeout for each mount (default 1200ms)
 */
export async function collectHeadingsFromRoutes<T extends { component?: React.ComponentType<any> }>(
  routes: T[],
  buildPathFn: (route: T) => string,
  opts?: {
    concurrency?: number;
    perMountTimeout?: number;
    headlessPropName?: string;
    maxEntries?: number; // stop once we hit this many entries
  }
) {
  const concurrency = opts?.concurrency ?? 2;
  const perMountTimeout = opts?.perMountTimeout ?? 1200;
  const headlessPropName = opts?.headlessPropName ?? '__headless';
  const maxEntries = opts?.maxEntries ?? 5000;

  const out: {
    heading: string;
    id: string | null;
    level: number;
    path: string;
  }[] = [];

  // worker queue pattern
  let i = 0;
  const workers: Promise<void>[] = [];
  const lock = { stopped: false };

  const worker = async () => {
    while (!lock.stopped) {
      const idx = i++;
      if (idx >= routes.length) break;
      const r = routes[idx];
      if (!r || !(r as any).component) continue;
      try {
        // call the offscreen reader with a safe timeout and injected headless prop
        const comp = (r as any).component as React.ComponentType<any>;
        const entries = await readHeadingsFromComponent(comp, {}, { timeoutMs: perMountTimeout, headlessPropName });
        const p = buildPathFn(r);
        for (const e of entries) {
          if (!e.heading) continue;
          out.push({ heading: e.heading, id: e.id, level: e.level, path: `${p}${e.id ? '#' + e.id : ''}` });
          if (out.length >= maxEntries) {
            lock.stopped = true;
            break;
          }
        }
      } catch (err) {
        // ignore faulty components
      }
      // time-slice: yield to main thread briefly so UI stays responsive for many routes
      // eslint-disable-next-line no-await-in-loop
      await new Promise((res) => setTimeout(res, 6));
    }
  };

  for (let w = 0; w < concurrency; w++) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return out;
}
