import { useState, useEffect } from 'react';
import { AnimationType, Skeleton, Variants } from '@syncfusion/react-notifications';
import './wave.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="news-container">
      <div className="news-section">
        <div className="news-card dark-theme">
          <div className="news-image-container">
            <Skeleton
              variant={Variants.Rectangle}
              animation={AnimationType.Wave}
              width="100%"
              height="100%"
            />
          </div>

          <div className="news-content">
            <div className="publication-row">
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width={40}
                height={40}
              />
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width="60%"
                height={16}
              />
            </div>

            <div className="title-skeleton">
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width="90%"
                height={26}
              />
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width="80%"
                height={26}
              />
            </div>

            <div className="interaction-buttons">
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width={40}
                height={30}
              />
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width={40}
                height={30}
              />
              <Skeleton
                variant={Variants.Rectangle}
                animation={AnimationType.Wave}
                width={40}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="news-section">
        {isLoading ? (
          <div className="loading-message dark-theme">Loading article...</div>
        ) : (
          <div className="news-card dark-theme">
            <div className="news-image-container">
              <img
                src={'/images/skeleton/Image.jpg'}
                alt="Ancient temple architecture"
                className="news-image"
              />
            </div>

            <div className="news-content">
              <div className="publication-row">
                <div className="publication-logo">TOI</div>
                <div className="publication-name">The Times of India</div>
              </div>

              <p className="news-title">10 great historic attractions  in India</p>

              <div className="interaction-buttons">
                <div className="like-button-skeleton">
                  <span className="like-icon">👍</span>
                  <span className="like-count">74</span>
                </div>
                <div className="dislike-button-skeleton">
                  <span className="dislike-icon">👎</span>
                  <span className="like-count">14</span>
                </div>
                <div className="comment-button-skeleton">
                  <span className="comment-icon">💬</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};