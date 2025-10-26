import { useState, useEffect } from 'react';
import { AnimationType, Skeleton, Variants } from '@syncfusion/react-notifications';
import './SocialPostSkeleton.css';
import { Button, Color } from '@syncfusion/react-buttons';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="post-comparison-container">
      <div className="post-column">
        <div className="post-card">
          <div className="post-header">
            <div className="avatar-container">
              <Skeleton variant={Variants.Circle} animation={AnimationType.Pulse} width={45} height={45} />
            </div>
            <div className="header-info">
              <Skeleton variant={Variants.Text} animation={AnimationType.Pulse} width={150} height={20} />

              <Skeleton variant={Variants.Text} animation={AnimationType.Pulse} width={120} height={16} />
            </div>
          </div>

          <div className="post-content">
            <Skeleton variant={Variants.Rectangle} animation={AnimationType.Pulse} width="100%" height={165} />
          </div>

          <div className="post-actions">
            <Skeleton variant={Variants.Rectangle} animation={AnimationType.Pulse} width={118} height={32} />
            <Skeleton variant={Variants.Rectangle} animation={AnimationType.Pulse} width={118} height={32} />
          </div>
        </div>
      </div>

      <div className="post-column">
        {isLoading ? (
          <div className="loading-message">Loading post...</div>
        ) : (
          <div className="post-card">
            <div className="post-header">
              <div className="avatar-container">
                <img
                  src={'/images/skeleton/profile.jpg'}
                  alt="Laura Callahan"
                  className="avatar"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" fill="%23e0e0e0"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23555555">LC</text></svg>';
                  }}
                />
              </div>
              <div className="header-info">
                <div className="user-name">Laura Callahan</div>
                <div className="post-time">4/6/2025, 1:11:33 PM</div>
              </div>
            </div>

            <div className="post-content">
              <img
                src={'/images/skeleton/post.jpg'}
                alt="Green rolling hills and mountains"
                className="post-image"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="220" viewBox="0 0 800 220"><rect width="800" height="220" fill="%23e0e0e0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23555555">Image not available</text></svg>';
                }}
              />
            </div>

            <div className="post-actions">
              <Button style={{ width: '118px' }} color={Color.Secondary}>Like</Button>
              <Button style={{ width: '118px' }}>Share</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};