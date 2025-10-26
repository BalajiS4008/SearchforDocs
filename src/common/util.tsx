import { CircleCheckIcon, CircleCloseIcon, ClockIcon } from "@syncfusion/react-icons";
import { ReactNode, useContext, useEffect, useState } from "react";
import { TocContext } from "./context";
import { ThemeContext } from './context';

interface SpinnerProps {
  isPreview?: boolean;
}

interface LazyErrorBoundaryProps {
  children: ReactNode;
}

export const Check = () => {
  return (
    <CircleCheckIcon width="20" height="20" color="#00C853"/>
  );
}

export const Cross = () => {
  return (
    <CircleCloseIcon width="20" height="20" color="#F44336"/>
  );
}

export const Clock = () => {
  return (
    <ClockIcon width="20" height="20" color="#00C853"/>
  );
}

export const OpenArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" />
      <path d="M15.0625 7.9375L16 8.875L11.85938 13L15.98438 17.125L15.0625 18.0625L10 13L15.0625 7.9375Z" />
    </svg>
  )
}

export const CloseArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="white">
      <mask id="close-arrow-mask">
        <path d="M0 0H13C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26H0V0Z" />
      </mask>
      <path d="M0 0H13C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26H0V0Z" />
      <path d="M0 -1H13C20.732 -1 27 5.26801 27 13H25C25 6.37258 19.6274 1 13 1H0V-1ZM27 13C27 20.732 20.732 27 13 27H0V25H13C19.6274 25 25 19.6274 25 13H27ZM0 26V0V26ZM13 -1C20.732 -1 27 5.26801 27 13C27 20.732 20.732 27 13 27V25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1V-1Z" />
      <path d="M10.9375 7.9375L10 8.875L14.14062 13L10.01562 17.125L10.9375 18.0625L16 13L10.9375 7.9375Z" />
    </svg>
  )
}

export const SBSpinner = ({isPreview = false}: SpinnerProps) => {
  return (
    <div className={`sb-spinner ${isPreview ? "" : "sb-content-spinner"}`}>
      <div className="sb-dot-spinner">
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
        <div className="sb-spinner-dots"></div>
      </div>
      {isPreview && <div className="sb-spinner-text">Loading...</div>}
    </div>
  );
}

export const LazyErrorBoundary = ({ children }: LazyErrorBoundaryProps) => {
  useEffect(() => {
    const handleError = (event: ErrorEvent): void => {
      const error = event.error;
      if (
        error?.name === "TypeError" && 
        error?.message?.includes("dynamically imported module")
      ) {
        window.location.reload();
      }
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);
  
  return <>{children}</>;
};

export function useToc() {
  return useContext(TocContext);
}

export function TocProvider({ children }: { children: ReactNode }) {
  const [routeToc, setRouteToc] = useState<boolean | undefined>(undefined);
  return (
    <TocContext.Provider value={{ routeToc, setRouteToc }}>
      {children}
    </TocContext.Provider>
  );
}

export function RouteWrapper({ 
  toc = true, 
  children 
}: { 
  toc?: boolean; 
  children: React.ReactElement | undefined 
}): React.ReactElement | null {
  const { setRouteToc } = useToc();
  useEffect(() => {
    setRouteToc(toc);
  }, [toc, setRouteToc]);
  
  if (!children) return null;
  return children;
}

function getIframeSrc(url: string, isDark: boolean): string {
  if (!isDark) return url;
  try {
    const urlObj = new URL(url, window.location.origin);
    urlObj.searchParams.set("theme", "dark");
    return urlObj.toString();
  } catch {
    if (url.includes("?")) return url + '&theme=dark';
    return url + '?theme=dark';
  }
}

export const Iframe: React.FC<React.IframeHTMLAttributes<HTMLIFrameElement>> = ({
  src = "",
  title,
  ...rest
}) => {
  const { themeName } = useContext(ThemeContext);
  const isDark = themeName === 'material3-dark';
  const displaySrc = getIframeSrc(src, isDark);
  return <iframe src={displaySrc} title={title} {...rest} />;
};