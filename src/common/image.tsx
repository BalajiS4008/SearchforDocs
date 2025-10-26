import { forwardRef, useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from './context';

export const ScrollVisibilityWrapper = ({ 
  children, 
  onVisibilityChange 
}: { 
  children: React.ReactNode;
  onVisibilityChange: (isVisible: boolean) => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = wrapperRef.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onVisibilityChange(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px',
      }
    );
    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onVisibilityChange]);

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};

function getImageSrc(src: string, isDark: boolean): string {
  if (!isDark) return src;
  return src.replace(/(\.[\w]+)$/, '-dark$1');
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hasDarkImage?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src = "", alt, hasDarkImage= false, ...rest }, ref) => {
    const { themeName } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const isDark = themeName === 'material3-dark';

    const [currentImageSrc, setCurrentImageSrc] = useState<string>(
      isDark ? getImageSrc(src, true) : src
    );

    useEffect(() => {
      setCurrentImageSrc(isDark && hasDarkImage ? getImageSrc(src, true) : src);
    }, [src, isDark, hasDarkImage]);

    return (
      <ScrollVisibilityWrapper onVisibilityChange={setIsVisible}>
        {isVisible && (
          <img
            ref={ref}
            src={currentImageSrc}
            alt={alt}
            {...rest}
          />
        )}
      </ScrollVisibilityWrapper>
    );
  }
);