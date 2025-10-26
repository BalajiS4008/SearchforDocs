import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { Provider } from '@syncfusion/react-base';
import { Routes, Route, BrowserRouter, useLocation, Navigate } from "react-router";
import { LeftSidebar, RouteItem } from "./common/left-pane";
import { TableOfContents } from "./common/toc";
import { ThemeContext, ThemeContextType, LoadContext, LoadContextType, RefreshContext, RefreshContextType } from "./common/context";
import { useToc, TocProvider, RouteWrapper } from "./common/util";
import { LazyErrorBoundary, SBSpinner } from "./common/util";
import { messageRoutes } from './components/message/routes';
import { gettingStartedRoutes } from './getting-started/routes';
import { licenseRoutes } from "./licensing/routes";
import { commonSectionRoutes } from "./common-features/routes";
import { AppearanceSectionRoutes } from "./appearance/routes";
import { numerictextboxRoutes } from "./components/numeric-textbox/routes";
import { textboxRoutes } from "./components/textbox/routes";
import { buttonRoutes } from "./components/button/routes";
import { checkboxRoutes } from "./components/checkbox/routes";
import { textareaRoutes } from "./components/textarea/routes";
import { skeletonRoutes } from "./components/skeleton/routes";
import { chipRoutes } from './components/chip/routes';
import { chipListRoutes } from './components/chip-list/routes';
import { tooltipRoutes } from './components/tooltip/routes';
import { toastRoutes } from "./components/toast/routes";
import { radiobuttonRoutes } from "./components/radio-button/routes";
import { fabRoutes } from "./components/floating-action-button/routes";
import { dropDownRoutes } from "./components/dropdown-button/routes";
import { splitbtnRoutes } from "./components/splitbutton/routes";
import { basePathName } from "./common/base-path";
import { Footer } from './common/footer';
import { frameworksRoutes } from "./frameworks/routes";
import { contextMenuRoutes } from "./components/context-menu/routes";
import { toolbarRoutes } from './components/toolbar/routes';
import { dialogRoutes } from './components/dialog/routes';
import { gridRoutes } from "./components/grid/routes";
import { calendarRoutes } from "./components/calendar/routes";
import { overviewRoutes } from './overview/routes';
import { chartRoutes } from "./components/chart/routes";
import { formValidatorRoutes } from "./components/form-validator/routes";
import { datePickerRoutes } from "./components/date-picker/routes";
import { dropdownlistRoutes } from "./components/dropdownlist/routes";
import { ChevronLeftFillIcon, ChevronRightFillIcon, ChevronLeftDoubleIcon } from "@syncfusion/react-icons";
import { Search} from "./common/Search"
import { preIndexHeadings } from './common/search-index';
// Maintain the order of allRoutes to match the left panel
const allRoutes = [
  ...overviewRoutes,
  ...gettingStartedRoutes,
  ...licenseRoutes,
  ...AppearanceSectionRoutes,
  ...commonSectionRoutes,
  ...frameworksRoutes,
  { id: 'components', name: 'Components', hasChildren: true, expanded: false },
  ...chartRoutes,
  ...gridRoutes,
  ...buttonRoutes, 
  ...chipListRoutes,
  ...chipRoutes,
  ...fabRoutes,
  ...radiobuttonRoutes,
  ...splitbtnRoutes,
  ...dropDownRoutes,
  ...checkboxRoutes,
  ...formValidatorRoutes,
  ...numerictextboxRoutes,
  ...textareaRoutes,
  ...textboxRoutes,  
  ...contextMenuRoutes,
  ...toolbarRoutes,  
  ...messageRoutes,
  ...skeletonRoutes,
  ...toastRoutes,
  ...tooltipRoutes,  
  ...dialogRoutes, 
  ...calendarRoutes,
  ...datePickerRoutes,  
];

interface AppContentProps {
  isMobile: boolean;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleLeftSidebar: () => void;
  toggleRightSidebar:(value?: boolean) => void;
}

function LoadingToggler({ updateLoadingState }: { updateLoadingState: React.Dispatch<React.SetStateAction<boolean>> }) {
  useEffect(() => {
    updateLoadingState((prev: boolean) => !prev);
    return () => {
      updateLoadingState((prev: boolean) => !prev);
    };
  }, [updateLoadingState]);
  return null;
}

const AppContent: React.FC<AppContentProps> = ({ isMobile, leftSidebarOpen, rightSidebarOpen, theme, toggleTheme, toggleLeftSidebar, toggleRightSidebar }) => {
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState(true);
  const { routeToc } = useToc();
  const [enableTransition, setEnableTransition] = useState(false)
  const location = useLocation();
  const mainContentRef = useRef<HTMLDivElement>(null);
  const tocSidebarRef = useRef<HTMLElement>(null);
  const prevTocRef = useRef<boolean | undefined>(undefined);
  const loadContextValue: LoadContextType = {
    loading: loading,
    setLoading: setLoading
  };
  useEffect(() => {
    const { hash } = location;
    const hashId = hash.split('#')[1];
    if (isMobile && leftSidebarOpen) {
      toggleLeftSidebar();
    }
    const heading = document.querySelectorAll("h2, h3");
    setEnableTransition(false);
    if(!loading){
      setToc(heading.length > 0);
    }
    if (!loading && routeToc !== undefined) {
      if (prevTocRef.current !== routeToc) {
        toggleRightSidebar(routeToc);
        prevTocRef.current = routeToc;
      }
    }
    const timeout = setTimeout(() => {
      setEnableTransition(true);
    }, 60);
    const scrollToSection = () => {
      if (hashId) {
        const target = document.getElementById(hashId);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
          }, 5);
        }
      } else {
        mainContentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    scrollToSection();
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash, mainContentRef, loading, routeToc, toggleRightSidebar]);

  useEffect(() => {
    const tocSidebar = tocSidebarRef.current;
    const mainContent = mainContentRef.current;
    if (!tocSidebar || !mainContent) return;
    const handleWheelEvent = (e: WheelEvent) => {
      const hasVerticalScrollbar = tocSidebar.scrollHeight > tocSidebar.clientHeight;
      if (!hasVerticalScrollbar) {
        e.preventDefault();
        mainContent.scrollBy({
          top: e.deltaY * 3,
          left: 0,
          behavior: 'smooth'
        });
      }
    };
    tocSidebar.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => {
      tocSidebar.removeEventListener('wheel', handleWheelEvent);
    };
  }, [toc, rightSidebarOpen]);

  const classes: string = useMemo(() => {
    const classArray: string[] = ['main-content sb-scrollbar'];
    if (!isMobile) { classArray.push('sb-desktop'); }
    if (!leftSidebarOpen) { classArray.push('sb-leftsidebar-closed', 'closed'); }
    else { classArray.push('opened'); }
    if (!rightSidebarOpen || !toc) { classArray.push('sb-rightsidebar-closed'); }
    if(!enableTransition) { classArray.push('no-transition'); }
    return classArray.join(' ');
  }, [isMobile,leftSidebarOpen,rightSidebarOpen, toc, enableTransition]);

  useEffect(() => {
    // Warm up search heading index at initial app render
    preIndexHeadings(allRoutes as any);
  }, []);

  return (
  <LoadContext.Provider value={loadContextValue}>
    <div className="app-container">
      <div id="layoutroot" className={theme}>
        <div className="topbar">
          <div className="brand-section">
            <div className="brand-info">
              {!isMobile ? (
                <div className="brand-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation">
                    <rect width="24" height="24" fillOpacity="0.01" />
                    <rect x="1" y="4.66675" width="5.71978" height="5.33461" />
                    <rect x="1" y="10.6746" width="5.71978" height="5.33461" />
                    <rect x="1" y="16.6655" width="5.71978" height="5.33461" />
                    <rect x="7.43872" y="4.66675" width="5.71978" height="5.33461" />
                    <rect x="7.43872" y="10.6746" width="5.71978" height="5.33461" />
                    <rect x="7.43872" y="16.6655" width="5.71978" height="5.33461" />
                    <rect width="5.53055" height="5.53055" transform="matrix(0.731301 0.682055 -0.731301 0.682055 19.3447 2)" />
                    <rect x="13.8689" y="10.6746" width="5.71978" height="5.33461" />
                    <rect x="13.8689" y="16.6655" width="5.71978" height="5.33461" />
                  </svg>
                </div>
              ) : (
                <button className={`sidebar-toggler ${leftSidebarOpen ? 'active' : ''}`}
                  onClick={toggleLeftSidebar}
                  role="button"
                  aria-label="toggle sidebar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-gray-800" role="presentation">
                    <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              )}
              {!isMobile ? (
                <>
                  <div className="brand-name">Essential Studio<sup>®</sup> Pure React</div>
                  <span className="react-preview">PREVIEW</span>
                </>
              ) : (
                <div className="brand-info-mb">
                  <div className="brand-name">Essential Studio<sup>®</sup></div>
                  <div className="brand-subtitle">Pure React <span className="react-preview">PREVIEW</span></div>
                </div>
              )}
            </div>
          </div>
          <div className="right-section">

            <div className="nav-links">
              <div className="action-buttons">
                <Search routes={[...allRoutes]}/>
                <a
                  className="icon-button theme-toggle"
                  href="https://github.com/syncfusion/react-ui-components"
                  aria-label={`View source`}
                >
                    <svg width="18" height="18" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                    </svg>
                </a>
              </div>
              <div className="action-buttons">
                <button
                  className="icon-button theme-toggle"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                >
                  {theme === 'dark' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="presentation">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'contentSection'}>
        <LeftSidebar isOpen={leftSidebarOpen} allRoutes={allRoutes} isMobile={isMobile}/>
        <div className="right">
          <div className="content-wrapper">
            {isMobile && leftSidebarOpen && (
              <div
                className="sidebar-overlay"
                onClick={toggleLeftSidebar}
              ></div>
            )}
            <div className={classes} ref={mainContentRef}>
              {!isMobile && (
                  <>
                    <button
                      className={`sb-sidebar-toggle sb-sidebar-left ${!leftSidebarOpen ? 'collapsed' : ''}`}
                      onClick={toggleLeftSidebar}
                      role="button"
                      aria-label={leftSidebarOpen ? "Collapse left pane" : "Expand left pane"}
                      aria-expanded={leftSidebarOpen}
                      aria-controls="left-sidebar"
                      title={leftSidebarOpen ? "Collapse left pane" : "Expand left pane"}
                    >
                      {leftSidebarOpen ? (
                        <ChevronLeftFillIcon className="sf-font-size-xs" />
                      ) : (
                        <ChevronRightFillIcon className="sf-font-size-xs" />
                      )}
                    </button>
                    {toc && (
                      <div className={`${!enableTransition ? 'no-transition': ''}`}>
                        {!rightSidebarOpen && (
                          <div className="sb-rightpane-collapsed-container">
                            <button
                              className="sb-rightpane-collapsed"
                              onClick={() => {
                                prevTocRef.current = !prevTocRef.current
                                toggleRightSidebar()
                              }
                              }
                              role="button"
                              aria-expanded={false}
                            >
                              <ChevronLeftDoubleIcon className="sb-icon-collapse sf-font-size-base"/>
                              <div className="views-label">
                                <span>ON THIS PAGE</span>
                              </div>
                            </button>
                          </div>
                        )}
                        {rightSidebarOpen && (
                          <button
                            className={`sb-sidebar-toggle sb-sidebar-right ${!rightSidebarOpen ? 'collapsed' : ''}`}
                            onClick={() => {
                              prevTocRef.current = !prevTocRef.current
                              toggleRightSidebar()
                            }
                            }
                            role="button"
                            aria-label={rightSidebarOpen ? "Collapse right pane" : "Expand right pane"}
                            aria-expanded={rightSidebarOpen}
                            aria-controls="toc-sidebar"
                            title={rightSidebarOpen ? "Collapse right pane" : "Expand right pane"}
                          >
                              <ChevronLeftFillIcon className="sf-font-size-xs" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    )}
                  </>
            )}
             <LazyErrorBoundary> 
              <Suspense>  
                <LoadingToggler updateLoadingState={setLoading}/>  
                <Routes>
                  <Route path="/" element={<Navigate to="/overview/introduction" replace />} />
                  {[...allRoutes, ...calendarRoutes, ...datePickerRoutes, ...dropdownlistRoutes].map((route, index) => {
                    let path;
                    if ((route as RouteItem).pid) {
                      const parentRoute = allRoutes.find(r => r.id === (route as RouteItem).pid);
                      if (parentRoute) {
                        const grandparentRoute = parentRoute.pid 
                          ? allRoutes.find(r => r.id === parentRoute.pid) 
                          : null;
                        if (grandparentRoute && grandparentRoute.pid === 'components' && grandparentRoute.hasChildren) {
                          path = `/${grandparentRoute.name.replace(/\s+/g, '-').toLowerCase()}/${parentRoute.name.replace(/\s+/g, '-').toLowerCase()}/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                        } else if (parentRoute.pid === 'components' && parentRoute.hasChildren) {
                          path = `/${parentRoute.name.replace(/\s+/g, '-').toLowerCase()}/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                        } else if (parentRoute.name !== 'Components') {
                          path = `/${parentRoute.name.replace(/\s+/g, '-').toLowerCase()}/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                        } else {
                          path = `/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                        }
                      } else {
                        path = `/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                      }
                    } else {
                      path = `/${route.name.replace(/\s+/g, '-').toLowerCase()}`;
                    }
                    return (
                      <Route
                        key={index}
                        path={path}
                        element={
                         <RouteWrapper toc={(route as RouteItem).toc}> 
                          <>
                            {route.component}
                            <Footer allRoutes={[...allRoutes]} />
                          </>
                         </RouteWrapper> 
                        }
                      />
                    );
                  })}
                  <Route path="*" element={<div>Loading...</div>} />
                </Routes>
              </Suspense>
            </LazyErrorBoundary>
            </div>
            {toc && ( <aside ref={tocSidebarRef} className={`toc-sidebar sb-scrollbar ${!rightSidebarOpen ? 'closed': ''} ${!enableTransition ? 'no-transition': ''}`}>
              <TableOfContents />
            </aside>)}
          </div>
        </div>
        </div>
        {loading && (
          <div className="sb-loading-overlay">
            <SBSpinner />
          </div>
        )}
      </div>
  </LoadContext.Provider>
  );
}
function App() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(() => {
    return window.innerWidth > 820;
  });
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [reset, setReset] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 820;
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    if(!isMobile) {
      setReset(prev => !prev);
    }
  }, [leftSidebarOpen, rightSidebarOpen]);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.add('sf-dark-mode');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      document.body.classList.remove('sf-dark-mode');
    }
  }, [theme]);
  useEffect(() => {
    const handleResize = () => {
      setLeftSidebarOpen(window.innerWidth > 820);
      setIsMobile(window.innerWidth <= 820);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleTheme = React.useCallback(() => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }, []);
  const toggleLeftSidebar = React.useCallback(() => {
    setLeftSidebarOpen(prev => !prev);
  }, []);
  const toggleRightSidebar = React.useCallback((value?: boolean) => {
    if (value !== undefined) {
      setRightSidebarOpen(value);
    } else {
      setRightSidebarOpen(prev => !prev);
    }
  }, []);
  const themeContextValue: ThemeContextType = {
    themeName: theme === 'light' ? 'material3' : 'material3-dark'
  };
  const RefreshContextValue: RefreshContextType = {
    refresh: reset
  };
  return (
    <BrowserRouter basename={basePathName}>
      <ThemeContext.Provider value={themeContextValue}>
        <RefreshContext.Provider value={RefreshContextValue}>
          <Provider ripple={true}>
            <TocProvider>
              <AppContent
                isMobile={isMobile}
                leftSidebarOpen={leftSidebarOpen}
                rightSidebarOpen={rightSidebarOpen}
                theme={theme}
                toggleTheme={toggleTheme}
                toggleLeftSidebar={toggleLeftSidebar}
                toggleRightSidebar={toggleRightSidebar}
              />
            </TocProvider>
          </Provider>
        </RefreshContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;