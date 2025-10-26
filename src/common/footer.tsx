import React, { useEffect, useMemo, useState, JSX } from "react";
import { ArrowRightUpIcon, ChevronRightSmallIcon, ChevronLeftSmallIcon } from "@syncfusion/react-icons";
import { Link, useLocation } from 'react-router';


// Using routes from props (no internal route imports)
import type { RouteItem } from './left-pane';

type Social = {
  name: "LinkedIn" | "Facebook" | "YouTube" | "Twitter";
  href: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.84v1.98h.06c.54-1.02 1.86-2.1 3.84-2.1 4.1 0 4.86 2.7 4.86 6.2V23h-4v-6.4c0-1.52-.02-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.38V23h-4V8.5z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path fill="currentColor" d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.49v-9.294H9.847V11.06h2.967V8.414c0-2.94 1.796-4.544 4.42-4.544 1.257 0 2.338.093 2.652.135v3.075h-1.82c-1.43 0-1.706.68-1.706 1.675v2.306h3.412l-.444 3.646h-2.968V24h5.824C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/>
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path fill="currentColor" d="M23.5 6.2a3.5 3.5 0 0 0-2.46-2.46C19.2 3.25 12 3.25 12 3.25s-7.2 0-9.04.49A3.5 3.5 0 0 0 .5 6.2C0 8.04 0 12 0 12s0 3.96.5 5.8a3.5 3.5 0 0 0 2.46 2.46c1.84.49 9.04.49 9.04.49s7.2 0 9.04-.49a3.5 3.5 0 0 0 2.46-2.46c.5-1.84.5-5.8.5-5.8s0-3.96-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path fill="currentColor" d="M18.244 2H21l-6.18 7.07L22.5 22h-5.66l-4.41-6.09L6.22 22H3.46l6.6-7.55L1.5 2h5.8l4.02 5.66L18.24 2zm-1.98 18h1.44L8.82 4H7.38l8.884 16z"/>
  </svg>
);

const socials: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/syncfusion",
    Icon: LinkedInIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Syncfusion",
    Icon: FacebookIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/syncfusioninc",
    Icon: YouTubeIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Syncfusion",
    Icon: TwitterIcon,
  },
];

export const Footer: React.FC<{ allRoutes?: RouteItem[] }> = ({ allRoutes: routesFromApp }) => {
  const location = useLocation();
  const [prevNav, setPrevNav] = useState<{ to: string; title: string } | null>(null);
  const [nextNav, setNextNav] = useState<{ to: string; title: string } | null>(null);

  // Use routes passed from App; no internal rebuild
  const allRoutesRaw: RouteItem[] = useMemo(() => (routesFromApp ?? []), [routesFromApp]);

  const allRoutes: RouteItem[] = useMemo(() => {
    const seen = new Set<string>();
    const list: RouteItem[] = [];
    for (const route of allRoutesRaw) {
      if (!seen.has(route.id)) {
        seen.add(route.id);
        list.push(route as RouteItem);
      }
    }
    return list;
  }, [allRoutesRaw]);

  const byId = useMemo(() => {
    const routeById = new Map<string, RouteItem>();
    allRoutes.forEach(route => routeById.set(route.id, route as RouteItem));
    return routeById;
  }, [allRoutes]);

  const childrenByPid = useMemo(() => {
    const childrenByParentId = new Map<string, RouteItem[]>();
    allRoutes.forEach(route => {
      if (route.pid) {
        if (!childrenByParentId.has(route.pid)) childrenByParentId.set(route.pid, []);
        childrenByParentId.get(route.pid)!.push(route as RouteItem);
      }
    });
    // Keep child arrays in the same order as allRoutes
    return childrenByParentId;
  }, [allRoutes]);

  const slug = (s?: string) => (s || '').replace(/\s+/g, '-').toLowerCase();
  const buildPath = (item: RouteItem): string => {
    const parent = item.pid ? byId.get(item.pid) : undefined;
    if (parent) {
      const grand = parent.pid ? byId.get(parent.pid) : undefined;
      if (grand && grand.pid === 'components' && grand.hasChildren) {
        return `/${slug(grand.name)}/${slug(parent.name)}/${slug(item.name)}`;
      } else if (parent.pid === 'components' && parent.hasChildren) {
        return `/${slug(parent.name)}/${slug(item.name)}`;
      } else if (parent.name !== 'Components') {
        return `/${slug(parent.name)}/${slug(item.name)}`;
      }
    }
    return `/${slug(item.name)}`;
  };

  const isLeafPage = (item: RouteItem) => Boolean(item.component);

  const sectionOrder = useMemo(() => {
    // Sections under Components (complex units)
    return allRoutes.filter(r => r.pid === 'components' && r.hasChildren === true);
  }, [allRoutes]);

  const componentUnits = useMemo(() => {
    // All direct children under Components (both complex sections and simple components)
    return allRoutes.filter(r => r.pid === 'components');
  }, [allRoutes]);

  const findCurrentItem = (): RouteItem | null => {
    const path = location.pathname.toLowerCase();
    // Try exact leaf match
    for (const route of allRoutes) {
      if (isLeafPage(route) && buildPath(route).toLowerCase() === path) return route as RouteItem;
    }
    // Fallback: resolve by slug segments
    const segments = path.split('/').filter(Boolean);
    const last = segments[segments.length - 1];
    const secondLast = segments.length > 1 ? segments[segments.length - 2] : undefined;

    // Try match by name slug and optional parent slug
    let candidate: RouteItem | undefined;
    for (const route of allRoutes) {
      if (!isLeafPage(route)) continue;
      const nameSlug = slug(route.name);
      if (nameSlug !== last) continue;
      if (secondLast) {
        const parent = route.pid ? byId.get(route.pid) : undefined;
        const grandParent = parent && parent.pid ? byId.get(parent.pid) : undefined;
        const parentSlug = parent ? slug(parent.name) : undefined;
        const grandParentSlug = grandParent ? slug(grandParent.name) : undefined;
        if (parentSlug === secondLast || grandParentSlug === secondLast) {
          candidate = route as RouteItem; break;
        }
      } else {
        candidate = route as RouteItem; break;
      }
    }
    return candidate || null;
  };

  const getSectionOf = (item: RouteItem | null): RouteItem | null => {
    if (!item) return null;
    const parentRoute: RouteItem | undefined = item.pid ? byId.get(item.pid) : undefined;
    if (!parentRoute) return null;
    if (parentRoute.pid === 'components' && parentRoute.hasChildren) return parentRoute;
    const grandParentRoute: RouteItem | undefined = parentRoute.pid ? byId.get(parentRoute.pid) : undefined;
    if (grandParentRoute && grandParentRoute.pid === 'components' && grandParentRoute.hasChildren) return grandParentRoute;
    return null;
  };

  // Returns the navigation unit inside Components for a given item:
  // - If item belongs to a complex section, return that section object
  // - If item is a simple component (parent is 'components' and not hasChildren), return the item itself
  const getComponentUnitOf = (item: RouteItem | null): RouteItem | null => {
    if (!item) return null;
    const section = getSectionOf(item);
    if (section) return section;
    const parent = item.pid ? byId.get(item.pid) : undefined;
    if (parent && parent.id === 'components') return item;
    return null;
  };

  const getTopGroupOf = (item: RouteItem): RouteItem | null => {
    let curr: RouteItem | undefined = item;
    while (curr && curr.pid) {
      const parent = byId.get(curr.pid);
      if (!parent) break;
      curr = parent;
    }
    return curr || null;
  };

  const topGroups = useMemo(() => {
    // Top-level groups with children, ordered by first appearance
    return allRoutes.filter(r => !r.pid && r.hasChildren);
  }, [allRoutes]);

  const collectGroupLeaves = (group: RouteItem): RouteItem[] => {
    if (group.id === 'components') {
      // Flatten all component sections' leaves in order
      const leaves: RouteItem[] = [];
      sectionOrder.forEach(section => {
        collectSectionLeaves(section).forEach(page => leaves.push(page));
      });
      return leaves;
    }
    const collectedLeaves: RouteItem[] = [];
    // direct children
    (childrenByPid.get(group.id) || []).forEach(child => {
      if (isLeafPage(child)) collectedLeaves.push(child);
      (childrenByPid.get(child.id) || []).forEach(grandChild => {
        if (isLeafPage(grandChild)) collectedLeaves.push(grandChild);
      });
    });
    if (collectedLeaves.length === 0) {
      allRoutes.forEach(route => {
        const parent = route.pid ? byId.get(route.pid) : undefined;
        const grandParent = parent && parent.pid ? byId.get(parent.pid) : undefined;
        if (isLeafPage(route) && (!route.pid || route.pid === group.id || parent?.pid === group.id || grandParent?.pid === group.id)) {
          collectedLeaves.push(route as RouteItem);
        }
      });
    }
    // Deduplicate preserving allRoutes order
    const seen = new Set<string>();
    const ordered: RouteItem[] = [];
    allRoutes.forEach(route => {
      if (collectedLeaves.some(a => a.id === route.id) && !seen.has(route.id)) {
        seen.add(route.id);
        ordered.push(route as RouteItem);
      }
    });
    return ordered;
  };

  const collectSectionLeaves = (section: RouteItem): RouteItem[] => {
    const collectedLeaves: RouteItem[] = [];
    // direct children first
    (childrenByPid.get(section.id) || []).forEach(child => {
      if (isLeafPage(child)) collectedLeaves.push(child);
      // grandchildren
      (childrenByPid.get(child.id) || []).forEach(grandChild => {
        if (isLeafPage(grandChild)) collectedLeaves.push(grandChild);
      });
    });
    // Include any other descendants already ordered in allRoutes if missed
    if (collectedLeaves.length === 0) {
      // fallback: any leaf whose parent chain includes section
      allRoutes.forEach(route => {
        const parent = route.pid ? byId.get(route.pid) : undefined;
        const grandParent = parent && parent.pid ? byId.get(parent.pid) : undefined;
        if (isLeafPage(route) && (route.pid === section.id || parent?.pid === section.id || grandParent?.pid === section.id)) {
          collectedLeaves.push(route as RouteItem);
        }
      });
    }
    // Deduplicate preserving order of appearance in allRoutes
    const seen = new Set<string>();
    const ordered: RouteItem[] = [];
    allRoutes.forEach(route => {
      if (collectedLeaves.some(a => a.id === route.id) && !seen.has(route.id)) {
        seen.add(route.id);
        ordered.push(route as RouteItem);
      }
    });
    return ordered;
  };

  useEffect(() => {
    const current = findCurrentItem();
    const section = getSectionOf(current);
    const compUnit = getComponentUnitOf(current);
    let prev: { to: string; title: string } | null = null;
    let next: { to: string; title: string } | null = null;

    if (compUnit && current) {
      // Resolve leaves within this unit (section or simple component)
      const leaves: RouteItem[] = compUnit.hasChildren ? collectSectionLeaves(compUnit) : [current as RouteItem];
      const index: number = leaves.findIndex((leaf: RouteItem) => leaf.id === (current as RouteItem).id);
      if (index > 0) {
        const prevLeaf = leaves[index - 1];
        prev = { to: buildPath(prevLeaf), title: prevLeaf.name };
      }
      if (index >= 0 && index < leaves.length - 1) {
        const nextLeaf = leaves[index + 1];
        next = { to: buildPath(nextLeaf), title: nextLeaf.name };
      }

      // Bridge across component units in Components (complex sections + simple components)
      const unitIdx = componentUnits.findIndex(unit => unit.id === compUnit.id);
      if (!next && unitIdx >= 0) {
        for (let i = unitIdx + 1; i < componentUnits.length; i++) {
          const unit = componentUnits[i];
          const unitLeaves = unit.hasChildren ? collectSectionLeaves(unit) : (isLeafPage(unit) ? [unit] : []);
          if (unitLeaves.length > 0) {
            const first = unitLeaves[0];
            next = { to: buildPath(first), title: first.name };
            break;
          }
        }
      }

      if (!prev && unitIdx >= 0) {
        for (let i = unitIdx - 1; i >= 0; i--) {
          const unit = componentUnits[i];
          const unitLeaves = unit.hasChildren ? collectSectionLeaves(unit) : (isLeafPage(unit) ? [unit] : []);
          if (unitLeaves.length > 0) {
            const last = unitLeaves[unitLeaves.length - 1];
            prev = { to: buildPath(last), title: last.name };
            break;
          }
        }
      }

      //very first overall inside Components and no prev → fall back to previous top group last leaf
      if (!prev && section) {
        const firstUnit = componentUnits.find(Boolean);
        if (firstUnit && compUnit.id === firstUnit.id) {
          const frameworksGroup = topGroups.find(g => g.id === 'frameworks');
          if (frameworksGroup) {
            const leavesPrevGroup = collectGroupLeaves(frameworksGroup);
            if (leavesPrevGroup.length > 0) {
              const last = leavesPrevGroup[leavesPrevGroup.length - 1];
              prev = { to: buildPath(last), title: last.name };
            }
          }
        }
      }
    } else if (current) {
      // Non-components pages linear prev/next within their top group
      const parent = current.pid ? byId.get(current.pid) : undefined;
      if (parent) {
        const siblings = (childrenByPid.get(parent.id) || []).filter(isLeafPage);
        const index = siblings.findIndex(sibling => sibling.id === current.id);
        if (index > 0) prev = { to: buildPath(siblings[index - 1]), title: siblings[index - 1].name };
        if (index >= 0 && index < siblings.length - 1) next = { to: buildPath(siblings[index + 1]), title: siblings[index + 1].name };
      } else {
        // Top-level pages (no pid)
        const topLeaves = allRoutes.filter(route => !route.pid && isLeafPage(route));
        const index = topLeaves.findIndex(leaf => leaf.id === current.id);
        if (index > 0) prev = { to: buildPath(topLeaves[index - 1]), title: topLeaves[index - 1].name };
        if (index >= 0 && index < topLeaves.length - 1) next = { to: buildPath(topLeaves[index + 1]), title: topLeaves[index + 1].name };
      }

      // If at group boundary, bridge to adjacent top-level group
      const topGroup = getTopGroupOf(current);
      if (topGroup) {
        const groupIndex = topGroups.findIndex(group => group.id === topGroup.id);
        if (!next) {
          if (groupIndex >= 0 && groupIndex < topGroups.length - 1) {
            const nextGroup = topGroups[groupIndex + 1];
            if (nextGroup.id === 'components') {
              // Enter components at the first non-empty unit's first leaf
              for (let i = 0; i < componentUnits.length; i++) {
                const unit = componentUnits[i];
                const unitLeaves = unit.hasChildren ? collectSectionLeaves(unit) : (isLeafPage(unit) ? [unit] : []);
                if (unitLeaves.length > 0) {
                  const first = unitLeaves[0];
                  next = { to: buildPath(first), title: first.name };
                  break;
                }
              }
            } else {
              const leaves = collectGroupLeaves(nextGroup);
              if (leaves.length > 0) next = { to: buildPath(leaves[0]), title: leaves[0].name };
            }
          }
        }
        if (!prev) {
          if (groupIndex > 0) {
            const prevGroup = topGroups[groupIndex - 1];
            if (prevGroup.id === 'components') {
              // Leave components at the last non-empty unit's last leaf
              for (let i = componentUnits.length - 1; i >= 0; i--) {
                const unit = componentUnits[i];
                const unitLeaves = unit.hasChildren ? collectSectionLeaves(unit) : (isLeafPage(unit) ? [unit] : []);
                if (unitLeaves.length > 0) {
                  const last = unitLeaves[unitLeaves.length - 1];
                  prev = { to: buildPath(last), title: last.name };
                  break;
                }
              }
            } else {
              const leaves = collectGroupLeaves(prevGroup);
              if (leaves.length > 0) prev = { to: buildPath(leaves[leaves.length - 1]), title: leaves[leaves.length - 1].name };
            }
          }
        }
      }
    }
    setPrevNav(prev);
    setNextNav(next);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, allRoutes]);

  return (
    <footer id="layoutroot">
      <div className="sb-footer-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
        <div className="sb-footer__nav-left">
          {prevNav ? (
            <Link className="sb-page-nav sb-prev" to={prevNav.to} aria-label={`prev: ${prevNav.title}`}>
              <ChevronLeftSmallIcon className="sb-nav-icon" />
              <span className="sb-nav-text">{prevNav.title}</span>
            </Link>
          ) : (
            <span style={{ visibility: 'hidden' }} className="sb-page-nav sb-prev" aria-hidden="true">
              <ChevronLeftSmallIcon className="sb-nav-icon" />
              <span className="sb-nav-text">•</span>
            </span>
          )}
        </div>
        <div className="sb-footer__nav-right">
          {nextNav ? (
            <Link className="sb-page-nav sb-next" to={nextNav.to} aria-label={`next: ${nextNav.title}`}>
              <span className="sb-nav-text">{nextNav.title}</span>
              <ChevronRightSmallIcon className="sb-nav-icon" />
            </Link>
          ) : (
            <span style={{ visibility: 'hidden' }} className="sb-page-nav sb-next" aria-hidden="true">
              <span className="sb-nav-text">•</span>
              <ChevronRightSmallIcon className="sb-nav-icon" />
            </span>
          )}
        </div>
      </div>

      <div className="sb-footer" style={{ padding: '12px 0' }}>
        <a href="https://www.syncfusion.com/blogs/" target="_blank" rel="noreferrer">Blog <ArrowRightUpIcon width={9} height={9} /></a>
        <nav className="sb-footer__social" aria-label="Social media">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              className="icon-button theme-toggle"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <Icon className="sf-social-btn__icon" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}