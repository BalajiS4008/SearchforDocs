import { useState, useEffect } from 'react';
import { AnimationType, Skeleton, Variants } from '@syncfusion/react-notifications';
import './fade.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="video-container">
      <div className="video-section">
        <div className="video-card dark-theme">
          <div className="thumbnail-container">
            <Skeleton
              variant={Variants.Rectangle}
              animation={AnimationType.Fade}
              width="100%"
              height={123}
            />
          </div>

          <div className="video-info">
            <Skeleton
              variant={Variants.Rectangle}
              animation={AnimationType.Fade}
              width="100%"
              height={40}
            />

            <Skeleton
              variant={Variants.Rectangle}
              animation={AnimationType.Fade}
              width="70%"
              height={16}
            />

            <Skeleton
              variant={Variants.Rectangle}
              animation={AnimationType.Fade}
              width="100%"
              height={16}
            />
          </div>
        </div>
      </div>

      <div className="video-section">
        {isLoading ? (
          <div className="loading-message dark-theme">Loading video...</div>
        ) : (
          <div className="video-card dark-theme">
            <div className="thumbnail-container">
              <img
                src={'/images/skeleton/OIP.jpg'}
                alt="Music festival performance with lights and crowd"
                className="thumbnail"
              />
              <div className="video-duration">10:23</div>
            </div>

            <div className="video-info">
              <h3 className="video-title">Electronic Music Festival Highlights 2023 | Official Live Set</h3>
              <div className="channel-name">Synthwave Radio</div>
              <div className="video-stats">742K views • 3 weeks ago</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};