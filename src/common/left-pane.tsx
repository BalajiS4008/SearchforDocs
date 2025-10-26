import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronDownSmallIcon, ChevronRightSmallIcon, ChevronLeftIcon } from "@syncfusion/react-icons";
import { Animation } from "@syncfusion/react-base";
import { LoadContext } from "./context";

export interface RouteItem {
    id: string;
    name: string;
    pid?: string;
    expanded?: boolean;
    component?: React.ReactNode;
    hasChildren?: boolean;
    category?: string;
    label?: string;
    toc?:boolean;
}

export const LeftSidebar = React.memo(({ isOpen, allRoutes, isMobile }: { isOpen: boolean; allRoutes: RouteItem[], isMobile: boolean }) => {
    const initialExpandedItems = React.useMemo(() => {
      if (!Array.isArray(allRoutes)) return [];
      const expandedIds = allRoutes
        .filter((item: RouteItem) => item.expanded === true).map(item => item.id);
      const parentIdsWithExpandedChildren = allRoutes
        .filter((item: RouteItem) => item.pid && allRoutes.some(parent =>
          parent.id === item.pid && (parent as RouteItem).expanded === true
        ))
        .map((item: RouteItem) => item.pid);
      return [...new Set([...expandedIds, ...parentIdsWithExpandedChildren])];
    }, [allRoutes]);

    const itemRefs = React.useRef(new Map<string, HTMLLIElement>());
    const sideBarRef = React.useRef<HTMLDivElement>((null));
    const [itemHeights, setItemHeights] = React.useState<Record<string, number>>({});
    const { loading, setLoading } = useContext(LoadContext);
    const [routeChanged, setRouteChanged ] = useState<boolean>(false);
    const [expandedItems, setExpandedItems] = useState(initialExpandedItems);
    const [filteredData, setFilteredData] = useState<RouteItem[]>([]);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isAPIHovered, setIsAPIHovered] = useState(false);
    const [isReleaseHovered, setIsReleaseHovered] = useState(false);
    const [complexComponentView, setComplexComponentView] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const mainViewRef = useRef<HTMLDivElement>(null);
    const complexViewRef = useRef<HTMLDivElement>(null);
    
    const getComplexComponents = React.useCallback(() => {
      const complexComponents: Record<string, { id: string; name: string; pages: RouteItem[] }> = {};
      const complexItems = allRoutes.filter(item => 
        item.pid === 'components' && item.hasChildren === true
      );
      complexItems.forEach(complexItem => {
        complexComponents[complexItem.id] = {
          id: complexItem.id,
          name: complexItem.name,
          pages: allRoutes.filter(item => {
            if (item.pid === complexItem.id) return true;
            if (item.pid && allRoutes.some(parent => 
              parent.id === item.pid && parent.pid === complexItem.id
            )) return true;
            return false;
          })
        };
      });
      return complexComponents;
    }, [allRoutes]);
    
    const getVirtualComponentsForDisplay = React.useCallback(() => {
      const complexComponents = getComplexComponents();
      const virtualItems: RouteItem[] = [];

      Object.values(complexComponents).forEach(complex => {
        if (complex.pages.length > 0) {
          const directChildren = complex.pages.filter(page => page.pid === complex.id);
          const firstPage = directChildren.length > 0 ? directChildren[0] : complex.pages[0];
          const complexItem = allRoutes.find(item => item.id === complex.id);
          virtualItems.push({
            id: `virtual-${complex.id}`,
            name: complex.name,
            pid: 'components',
            category: complexItem?.category || firstPage.category,
            hasChildren: false,
            component: firstPage.component,
            label: complexItem?.label
          });
        }
      });
      return virtualItems;
    }, [getComplexComponents, allRoutes]);

    const complexComponentIds = React.useMemo(() => {
      const complexComponents = getComplexComponents();
      return Object.keys(complexComponents);
    }, [getComplexComponents]);

    useEffect(() => {
      if (!Array.isArray(allRoutes) || allRoutes.length === 0) return;
      const findItemByPath = (path: string) => {
        const pathParts = path.split('/').filter(Boolean);
        if (pathParts.length >= 2) {
          const complexComponents = getComplexComponents();
          for (const complex of Object.values(complexComponents)) {
            const complexPathName = complex.name.replace(/\s+/g, '-').toLowerCase();
            if (complexPathName === pathParts[0]) {
              const partsToCheck = pathParts.length >= 3 ? pathParts[2] : pathParts[1];
              for (const page of complex.pages) {
                const pagePathName = page.name.replace(/\s+/g, '-').toLowerCase();
                if (pagePathName === partsToCheck) {
                  return page;
                }
              }
            }
          }
        }
        return allRoutes.find(item => {
          const parentItem = item.pid ? allRoutes.find(r => r.id === item.pid) : null;
          const itemPath = parentItem && parentItem.name !== 'Components' 
            ? `/${parentItem.name.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`
            : `/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
          
          return itemPath === path;
        });
      };
      
      const currentItem = findItemByPath(location.pathname);
      if (currentItem) {
        setActiveItem(currentItem.id);
        if (currentItem.pid) {
          const parentItem = allRoutes.find(item => item.id === currentItem.pid);
          if (parentItem && parentItem.pid === 'components' && parentItem.hasChildren) {
            const complexComponents = getComplexComponents();
            const complexComponent = complexComponents[parentItem.id];
            if (complexComponent) {
              setFilteredData(complexComponent.pages);
            } else {
              setFilteredData([]);
            }
            setComplexComponentView(parentItem.id);
          } else {
            const grandparentId = parentItem?.pid;
            if (grandparentId) {
              const grandparent = allRoutes.find(item => item.id === grandparentId);
              if (grandparent && grandparent.pid === 'components' && grandparent.hasChildren) {
                setComplexComponentView(grandparent.id);
              } else {
                setComplexComponentView(null);
              }
            } else {
              setComplexComponentView(null);
            }
          }
          setExpandedItems(prev => 
            prev.includes(currentItem.pid!) ? prev : [...prev, currentItem.pid!]
          );
          if (parentItem && parentItem.pid) {
            setExpandedItems(prev =>
              prev.includes(parentItem.pid) ? prev : [...prev, parentItem.pid]
            );
          }
        }
      }
      if(loading && routeChanged)
      {
        setRouteChanged(false);
        setLoading(false);
      }
    }, [location.pathname, allRoutes, getComplexComponents]);
  
    useEffect(() => {
      if (!Array.isArray(allRoutes)) {
        setFilteredData([]);
        return;
      }
      if (complexComponentView) {
        const complexComponents = getComplexComponents();
        const complexComponent = complexComponents[complexComponentView];
        if (complexComponent) {
          setFilteredData(complexComponent.pages);
        } else {
          setFilteredData([]);
        }
      } else {
        const virtualItems = getVirtualComponentsForDisplay();
        const filteredItems = allRoutes.filter(item => {
          if (complexComponentIds.includes(item.id)) {
            return false;
          }
          if (item.pid && complexComponentIds.includes(item.pid)) {
            return false;
          }
          const parent = item.pid ? allRoutes.find(r => r.id === item.pid) : null;
          if (parent && parent.pid && complexComponentIds.includes(parent.pid)) {
            return false;
          }
          return true;
        });
        
        setFilteredData([...virtualItems, ...filteredItems]);
      }
    }, [allRoutes, complexComponentView, getComplexComponents, getVirtualComponentsForDisplay, complexComponentIds]);
    
    const { topLevelItems, childItemsByParentId } = React.useMemo(() => {
      const topItems = filteredData.filter(item => !item.pid);
      const childItems = filteredData.reduce((acc: Record<string, RouteItem[]>, item: RouteItem) => {
        if (item.pid) {
          if (!acc[item.pid]) acc[item.pid] = [];
          acc[item.pid].push(item);
        }
        return acc;
      }, {} as Record<string, RouteItem[]>);
      return { topLevelItems: topItems, childItemsByParentId: childItems };
    }, [filteredData]);
    
    const toggleExpand = React.useCallback((id: string) => {
      setExpandedItems((prev) =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    }, []);

    const viewSwitch = (from: HTMLElement, to: HTMLElement, reverse?: boolean) => {
      if (isAnimating) return;
      if (sideBarRef.current) {
        sideBarRef.current?.scrollTo(0, 0);
      }
      if (isMobile && !reverse) {
        setIsAnimating(false);
        return;
      }
      setIsAnimating(true);
      const animation = Animation({ duration: 500, timingFunction: 'ease' });
      animation.animate(from, {
        name: reverse ? 'SlideRightIn' : 'SlideRightOut',
        end: () => {
          setIsAnimating(false);
        }
      });
      animation.animate(to, {
        name: reverse ? 'SlideRightIn' : 'SlideLeftIn'
      });
    };

    const showComplexView = (complexId: string) => {
      if (mainViewRef.current && complexViewRef.current) {
        setComplexComponentView(complexId);
        viewSwitch(mainViewRef.current!, complexViewRef.current!, false);
      }
    };

    const showMainView = () => {
      if (mainViewRef.current && complexViewRef.current) {
        viewSwitch(complexViewRef.current!, mainViewRef.current!, true);
        setComplexComponentView(null);
      }
    };
    
    const handleItemClick = React.useCallback((id: string, isParent: boolean) => {
      if (isAnimating) return; 
      setActiveItem(id);
      if (isParent) {
        toggleExpand(id);
        return;
      }
      if (!isParent && id) {
        if (id.startsWith('virtual-')) {
          setLoading(true);
          setRouteChanged(true);
          const complexId = id.replace('virtual-', '');
          const complexComponents = getComplexComponents();
          const complex = complexComponents[complexId];
          if (complex && complex.pages.length > 0) {
            const directChildren = complex.pages.filter(page => page.pid === complexId);
            const firstPage = directChildren.length > 0 ? directChildren[0] : complex.pages[0];
            const formatPathSegment = (name: string) => name.replace(/\s+/g, '-').toLowerCase(); 
            const pathSegment = `/${formatPathSegment(complex.name)}/${formatPathSegment(firstPage.name)}`
            if(location.pathname === pathSegment)
            {
              setLoading(false);
              setRouteChanged(false);
            }
            navigate(pathSegment);
            setTimeout(() => {
              setActiveItem(firstPage.id);
              showComplexView(complexId);
            }, 0);
            return;
          }
        }
        const selectedItem = allRoutes.find(item => item.id === id);
        if (selectedItem) {
          const formatPathSegment = (name: string) => name.replace(/\s+/g, '-').toLowerCase();
          if (complexComponentView) {
            const complexComponents = getComplexComponents();
            const complexComponent = complexComponents[complexComponentView];
            if (selectedItem.pid && selectedItem.pid !== complexComponentView) {
              const parentItem = allRoutes.find(r => r.id === selectedItem.pid);
              if (parentItem) {
                navigate(`/${formatPathSegment(complexComponent.name)}/${formatPathSegment(parentItem.name)}/${formatPathSegment(selectedItem.name)}`);
                return;
              }
            }
            navigate(`/${formatPathSegment(complexComponent.name)}/${formatPathSegment(selectedItem.name)}`);
          } else {
            const parentItem = selectedItem.pid
              ? allRoutes.find(item => item.id === selectedItem.pid)
              : null;
            if (parentItem && parentItem.name !== 'Components') {
              navigate(`/${formatPathSegment(parentItem.name)}/${formatPathSegment(selectedItem.name)}`);
            } else {
              navigate(`/${formatPathSegment(selectedItem.name)}`);
            }
          }
        }
      }
    }, [navigate, toggleExpand, allRoutes, complexComponentView, getComplexComponents, isAnimating]);
    const handleBackToComponents = () => {
      if (isAnimating) return;
      const complexComponents = getComplexComponents();
      const currentComplex = complexComponents[complexComponentView || ''];
      if (currentComplex) {
        const virtualId = `virtual-${currentComplex.id}`;
        setActiveItem(virtualId);
        setExpandedItems(prev => 
          prev.includes('components') ? prev : [...prev, 'components']
        );
        showMainView();
      }
    };

    useEffect(() => {
      const defaultTitle = `Syncfusion® React`;
      const formatTitle = (segment: string) => segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      const updatePageTitle = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        if (complexComponentView) {
          const complexComponents = getComplexComponents();
          const currentComplex = complexComponents[complexComponentView];
          if (currentComplex) {
            const activeRoute = allRoutes.find(route => route.id === activeItem);
            if (activeRoute) {
              const titleText = pathSegments.map(segment => formatTitle(segment)).join(' - ');
              document.title = `${titleText} - ${defaultTitle}`;
            } else {
              document.title = `${currentComplex.name} - ${defaultTitle}`;
            }
          }
          return;
        }
        const currentSegment = pathSegments[pathSegments.length - 1];
        if (currentSegment) {
          document.title = `${formatTitle(currentSegment)} - ${defaultTitle}`;
        }
      };
      updatePageTitle();
      // update canonical URL
      const canonicalUrl = 'https://react.syncfusion.com' + location.pathname;
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      if (linkCanonical && ogUrl && twitterUrl) {
        linkCanonical.setAttribute('href', canonicalUrl);
        ogUrl.setAttribute('content', canonicalUrl);
        twitterUrl.setAttribute('content', canonicalUrl);
      }
      const jsonLdScript = document.getElementById('json-ld-script');
      if (jsonLdScript && jsonLdScript.textContent) {
        try {
          const jsonData = JSON.parse(jsonLdScript.textContent);
          jsonData.url = canonicalUrl;
          jsonLdScript.textContent = JSON.stringify(jsonData, null, 2);
        } catch (error) {
          console.error("Error parsing or updating JSON-LD script:", error);
        }
      }
    }, [location.pathname, complexComponentView, activeItem, allRoutes, getComplexComponents]);
    useEffect(() => {
      const frame = requestAnimationFrame(() => {
        const heights: Record<string, number> = {};
        itemRefs.current.forEach((el, id) => {
          if (el) heights[id] = el.offsetHeight;
        });
        setItemHeights(heights);
      });
      return () => cancelAnimationFrame(frame);
    }, [filteredData, expandedItems]);
    const calculateHeight = React.useCallback((itemId: string, isParentItem: boolean): React.CSSProperties => {
      if (isParentItem) {
        return {};
      }
      const listItem = itemRefs.current.get(itemId);
      if (listItem) {
        return { height: `${listItem.offsetHeight}px` };
      }
      return {};
    }, [itemHeights]);
    const renderTreeItem = React.useCallback((item: RouteItem, level: number = 1, processedItems: Set<string> = new Set()) => {
      if (!item || typeof item !== 'object' || processedItems.has(item.id)) {
        return null;
      }
      processedItems.add(item.id);
      const isFirstComplexItem = complexComponentView && level === 1 && 
      filteredData.filter(data => data.pid === complexComponentView)[0]?.id === item.id;
      const children = childItemsByParentId[item.id] || [];
      const isParent = item.hasChildren || children.length > 0;
      const isExpanded = expandedItems.includes(item.id);
      const isActive = activeItem === item.id;
      const isHovered = hoveredItem === item.id;
      let itemPath: string;
      if (complexComponentView) {
        const complexComponents = getComplexComponents();
        const complexComponent = complexComponents[complexComponentView];
        const parentId = item.pid;
        const isNestedChild = parentId && parentId !== complexComponentView;
        if (isNestedChild) {
          const parentItem = allRoutes.find(r => r.id === parentId);
          if (parentItem) {
            itemPath = `/${complexComponent.name.replace(/\s+/g, '-').toLowerCase()}/${parentItem.name.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
          } else {
            itemPath = `/${complexComponent.name.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
          }
        } else {
          itemPath = `/${complexComponent.name.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
        }
      } else if (item.pid) {
        const parentItem = allRoutes.find(r => r.id === item.pid);
        if (parentItem && parentItem.name !== 'Components') {
          itemPath = `/${parentItem.name.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
        } else {
          itemPath = `/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
        }
      } else {
        itemPath = `/${item.name.replace(/\s+/g, '-').toLowerCase()}`;
      }
      const isRouteActive = location.pathname === itemPath;
      if (item.pid && !expandedItems.includes(item.pid)) {
        return null;
      }
      const listItemProps = {
        className: `sb-list-item sb-level-${level} ${isParent ? 'sb-has-child' : ''} ${isExpanded ? '' : 'sb-node-collapsed'} ${isRouteActive ? 'sb-active' : ''} ${isHovered ? 'sb-hover' : ''}`,
        role: "treeitem",
        'data-uid': item.id,
        'aria-level': level,
        tabIndex: level === 1 ? 0 : -1,
        'aria-expanded': isExpanded,
        'aria-selected': isActive,
        style: { display: 'block' },
        onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
          e.stopPropagation();
          handleItemClick(item.id, isParent);
        },
        onMouseEnter: () => setHoveredItem(item.id),
        onMouseLeave: () => setHoveredItem(null)
      };
      const collapseExpandIcon = (
        <div
          className="sb-icons interaction"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand(item.id);
          }}
        >
          {isExpanded ? (
            <ChevronDownSmallIcon width={20} height={20} />
          ) : (
            <ChevronRightSmallIcon width={20} height={20} />
          )}
        </div>
      );
      if (item.id === 'components' && isParent) {
        const componentsItems = childItemsByParentId[item.id] || [];
        const componentsByCategory: Record<string, RouteItem[]> = {};
        const categoryOrder: string[] = [];
        componentsItems.forEach((comp) => {
          const component = comp as RouteItem;
          const categoryId = component.category?.toLocaleLowerCase() || 'Other';
          if (!componentsByCategory[categoryId]) {
            componentsByCategory[categoryId] = [];
            categoryOrder.push(categoryId);
          }
          componentsByCategory[categoryId].push(comp);
        });
        return (
          <li key={item.id} {...listItemProps}>
            <div className="sb-text-content sb-icon-wrapper">
              {collapseExpandIcon}
              <span className="sb-list-text">{item.name || 'Unnamed'}</span>
            </div>
            {isExpanded && (
              <ul className="sb-list-parent sb-ul" role="group" style={{ display: 'block' }}>
                {categoryOrder.map(categoryId => {
                  if (categoryId === 'Other') return null;
                  return (
                    <React.Fragment key={`category-${categoryId}`}>
                      <li key={`header-${categoryId}`} className="sb-list-item sb-level-2 sb-category-header" 
                        role="treeitem" 
                        onClick={(e) => {e.stopPropagation();}}
                        tabIndex={-1} 
                        aria-expanded="false" 
                        aria-selected="false" 
                        style={{ display: 'block'}}>
                        <div className="sb-fullrow sb-category" role="button" aria-label="Navigate button" tabIndex={-1}></div>
                        <div className="sb-text-content sb-icon-wrapper">
                          <span className="sb-list-text sb-category-name">{categoryId}</span>
                        </div>
                      </li>
                      {componentsByCategory[categoryId].map(comp => 
                        renderTreeItem(comp, level + 1, new Set(processedItems))
                      )}
                    </React.Fragment>
                  );
                })}
                {componentsByCategory['Other'] && componentsByCategory['Other'].length > 0 && (
                  <React.Fragment key="category-other">
                    {componentsByCategory['Other'].map(comp => 
                      renderTreeItem(comp, level + 1, new Set(processedItems))
                    )}
                  </React.Fragment>
                )}
              </ul>
            )}
          </li>
        );
      }
      const complexComponents = getComplexComponents();
      const currentComplexName = complexComponents[complexComponentView || '']?.name || null;
      return (
        <React.Fragment key={`item-wrapper-${item.id}`}>
          {isFirstComplexItem && (
            <li key={`complex-header-${complexComponentView}`}
              className="sb-list-item sb-level-2 sb-category-header"
              role="treeitem"
              onClick={(e) => { e.stopPropagation(); }}
              tabIndex={-1}
              aria-expanded="false"
              aria-selected="false"
              style={{ display: 'block' }}>
              <div className="sb-fullrow sb-category" role="button" aria-label="Navigate button" tabIndex={-1}></div>
              <div className="sb-text-content sb-icon-wrapper">
                <span className="sb-list-text sb-complex-component-header sb-category-name">{currentComplexName}</span>
              </div>
            </li>
          )}
          <li key={item.id} {...listItemProps} ref={(el: HTMLLIElement) => {
            if (el) {
              itemRefs.current.set(item.id, el);
            } else {
              itemRefs.current.delete(item.id);
            }
          }}>
            {(!isParent || complexComponentView) && <div className="sb-fullrow" role="button" aria-label="Navigate button" tabIndex={0} style={calculateHeight(item.id, isParent)}></div>}
            <div className={`sb-text-content sb-icon-wrapper ${complexComponentView ? 'sb-text-align' : ''}`}>
              {isParent && collapseExpandIcon}
              <span className="sb-list-text" data-tag={item.label ? item.label : null}>{item.name || 'Unnamed'}</span>
            </div>
            {isParent && isExpanded && children.length > 0 && (
              <ul className="sb-list-parent sb-ul" role="group" style={{ display: 'block' }}>
                {children.map(child => 
                  renderTreeItem(child, level + 1, new Set(processedItems))
                )}
              </ul>
            )}
          </li>
        </React.Fragment>
      );
    }, [expandedItems, activeItem, hoveredItem, childItemsByParentId, handleItemClick, toggleExpand, allRoutes, location.pathname, complexComponentView, getComplexComponents]);

    const renderMainView = () => (
      <div className="sb-control sb-lib sb-fullrow-wrap sb-touch sb-keyboard sb-leftpane sb-text-wrap " role="tree" aria-multiselectable="false" aria-disabled="false" data-ripple="true">
        <ul className="sb-list-parent sb-ul" role="group">
          {Array.isArray(topLevelItems) && topLevelItems.length > 0 ? (
            topLevelItems.map(item => renderTreeItem(item, 1, new Set()))
          ) : (
            <li key="no-items-main" className="sb-list-item">
              <div className="sb-text-content">
                <span className="sb-list-text">No items to display</span>
              </div>
            </li>
          )}
          <li key="components-api" className={`sb-list-item sb-level-1 sb-node-collapsed ${isAPIHovered ? 'sb-hover' : ''}`} role="treeitem" data-uid="componentsAPI" aria-level={1} tabIndex={0} aria-expanded="false" aria-selected="false" style={{ display: 'block' }} onMouseEnter={() => setIsAPIHovered(true)} onMouseLeave={() => setIsAPIHovered(false)}>
            <div className="sb-text-content sb-icon-wrapper sb-leftpane-text">
              <a className="sb-list-text sb-leftpane-link" href="https://react-api.syncfusion.com/button/overview" aria-label="Opens link in new tab">Component API</a>
            </div>
          </li>
          <li key="release-notes" className={`sb-list-item sb-level-1 sb-node-collapsed ${isReleaseHovered ? 'sb-hover' : ''}`} role="treeitem" data-uid="releaseNotes" aria-level={1} tabIndex={0} aria-expanded="false" aria-selected="false" style={{ display: 'block' }} onMouseEnter={() => setIsReleaseHovered(true)} onMouseLeave={() => setIsReleaseHovered(false)}>
            <div className="sb-text-content sb-icon-wrapper sb-leftpane-text">
              <a className="sb-list-text sb-leftpane-link" href="https://react-api.syncfusion.com/release-notes/31.1.17" aria-label="Opens link in new tab">Release Notes</a>
            </div>
          </li>
        </ul>
      </div>
    );

    const renderComplexView = () => {
      return (
        <>
          <div className="sb-home" role="button" tabIndex={0} aria-label="React home page" onClick={handleBackToComponents}>
            <ChevronLeftIcon className="sb-back-icon" width="20" height="22"/>
            <div className="sb-home-text">
              <span>ALL COMPONENTS</span>
            </div>
          </div>
          <div className="sb-control sb-lib sb-fullrow-wrap sb-touch sb-keyboard sb-leftpane sb-text-wrap sb-complex-view" role="tree" aria-multiselectable="false" aria-disabled="false" data-ripple="true">
            <ul className="sb-list-parent sb-ul sb-multi-view" role="group">
              {Array.isArray(filteredData) && filteredData.length > 0 ? (
                filteredData
                  .filter(item => item.pid === complexComponentView)
                  .map(item => renderTreeItem(item, 1, new Set()))
              ) : (
                <li key="no-items-complex" className="sb-list-item">
                  <div className="sb-text-content">
                    <span className="sb-list-text">No items to display</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </>
      );
    };
    
    return (
      <div ref={sideBarRef} className={`left sb-sidebar-wrapper ${isOpen ? 'open' : 'closed'} ${complexComponentView ? 'sb-complex-component' : ''} sb-scrollbar`}>
        <div className="sidebar-content">
          <div className="sb-control-navigation">
            <div ref={mainViewRef} className={`sb-animation-wrapper ${complexComponentView ? 'sb-hide' : ''}`}>
              {!complexComponentView && renderMainView()}
            </div>
            <div ref={complexViewRef} className={`sb-animation-wrapper ${!complexComponentView ? 'sb-hide' : ''}`}>
              {complexComponentView && renderComplexView()}
            </div>
          </div>
        </div>
      </div>
    );
  });