import React, { Children, HTMLAttributes, useEffect, useRef, useState } from 'react';
import './property-pane.css';

export interface PropertyPaneProps {
  title?: string | null;
  className?: string;
  children: React.ReactNode;
  position?: 'right' | 'top';
}

export const PropertyPane: React.FC<PropertyPaneProps & HTMLAttributes<HTMLDivElement>> = ({
  title = null,
  className = '',
  children,
  position = "top",
  ...rest
}) => {
  const [isSmallFrame, setIsSmallFrame] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallFrame(window.innerWidth <= 1240);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  position = isSmallFrame ? 'top' : position
  const childColumns = Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === PropertyColumn
  ).length;
  useEffect(() => {
    const alignRows = () => {
      if (!contentRef.current || childColumns <= 1) return;
      const columns = Array.from(contentRef.current.querySelectorAll('.property-col'));
      if (columns.length === 0) return;
      const maxRows = Math.max(...columns.map(col => col.children.length));
      for (let i = 0; i < maxRows; i++) {
        const rowsAtIndex = columns.map(col => col.children[i]).filter(Boolean) as HTMLElement[];
        if (rowsAtIndex.length > 1) {
          rowsAtIndex.forEach(row => row.style.height = 'auto');
          const maxHeight = Math.max(...rowsAtIndex.map(row => row.offsetHeight));
          rowsAtIndex.forEach(row => row.style.height = `${maxHeight}px`);
        }
      }
    };
    const timeout = setTimeout(alignRows, 100);
    const resizeObserver = new ResizeObserver(alignRows);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    return () => {
      clearTimeout(timeout);
      resizeObserver.disconnect();
    };
  }, [children, childColumns]);
  return (
    <div
      className={`property-panel ${className}`}
      data-property-pane="true"
      data-position={position}
      data-columns={childColumns}
      {...rest}
    >
      {title && <div className="property-panel-header">
        <h3 className="property-panel-title">{title}</h3>
      </div>}
      <div className="property-panel-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export interface PropertyColumnProps {
  children: React.ReactNode;
  span?: number;
  className?: string;
}

export const PropertyColumn: React.FC<PropertyColumnProps> = ({
  children,
  span = 6,
  className = ''
}) => {
  return (
    <div className={`property-col property-col-${span} ${className}`}>
      {children}
    </div>
  );
};

export interface PropertyRowProps {
  children: React.ReactNode;
  className?: string;
}

export const PropertyRow: React.FC<PropertyRowProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`property-row ${className}`}>
      {children}
    </div>
  );
};

export default PropertyPane;
