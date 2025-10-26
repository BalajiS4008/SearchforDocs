import { Button, Variant } from '@syncfusion/react-buttons';

const images = [
  {
    url: '/images/button/bridge.jpg',
    title: 'Bridge',
    width: '30%',
  }
];

export default function App() {
  return (
    <div className='sf-content-center'>
      {images.map((image) => (
        <div key={image.title} style={{ position: 'relative', width: image.width }}>
          <Button
            variant={Variant.Standard}
            style={{
              width: '100%',
              height: '200px',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0px',
              overflow: 'hidden',
              color: '#fff',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.querySelector('.overlay') as HTMLElement)!.style.opacity = '0.8';
              (e.currentTarget.querySelector('.title-box') as HTMLElement)!.style.boxShadow = '0 0 0 3px #fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.querySelector('.overlay') as HTMLElement)!.style.opacity = '0.6';
              (e.currentTarget.querySelector('.title-box') as HTMLElement)!.style.boxShadow = 'none';
            }}
          >
            <div className="overlay" style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'opacity 0.3s ease',
            }}>
              <div className="title-box" style={{
                textAlign: 'center',
                padding: '12px 16px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease', 
              }}>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{image.title}</p>
              </div>
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
};