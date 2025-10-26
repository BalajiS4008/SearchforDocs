import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { LoadContext } from "./context";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function useToc() {
  const { loading } = useContext(LoadContext);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [userClicked, setUserClicked] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'))
      .filter(heading => {
        let parent = heading.parentElement;
        while (parent) {
          if (parent.classList && parent.classList.contains('component-container')) {
            return false;
          }
          parent = parent.parentElement;
        }
        return true;
      })
      .map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: Number(heading.tagName.replace('H', '')),
      }));
    setToc(headings);
  }, [location.pathname, loading]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const headingElements = document.querySelectorAll('h2, h3');
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (!userClicked) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      }
    };
    const observerOptions = {
      rootMargin: "-20px 0px -80% 0px",
      threshold: 0.5
    };
    headingElements.forEach(element => {
      if (element.id) {
        const observer = new IntersectionObserver(callback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });
    const timer = setTimeout(() => {
      setUserClicked(false);
    }, 1000);
    return () => {
      observers.forEach(observer => observer.disconnect());
      clearTimeout(timer);
    };
  }, [location.pathname, toc, userClicked]);
  const setManualActiveId = (id: string) => {
    setActiveId(id);
    setUserClicked(true);
  };
  return { toc, activeId, setManualActiveId };
}

export const TableOfContents = () => {
  const { toc, activeId, setManualActiveId } = useToc();
  return (
    <nav className="toc-container">
      <div className="toc-header">
        <p className="toc-title">ON THIS PAGE</p>
      </div>
        <ul className="toc-list">
          {toc.map(({ id, text, level }) => (
            <li key={id} className={`toc-item toc-level-${level} ${id === activeId ? 'active' : ''}`}>
              <a
                href={`#${id}`}
                aria-label="Open in tab"
                className={`toc-link`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  e.preventDefault();
                  setManualActiveId(id);
                  const anchor = (e.target as HTMLElement).closest('a');
                  if (anchor?.getAttribute('href')?.includes('#')) {
                    e.preventDefault();
                    const targetId = anchor.href.split('#')[1];
                    if (targetId) {
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant' });
                      history.pushState(null, '', anchor.getAttribute('href'));
                    }
                  }
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  );
};