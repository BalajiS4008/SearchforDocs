import { SearchIcon } from '@syncfusion/react-icons';
import './icon-style.css';

export default function App() {
  const sizes = [15, 22, 35, 42];
  const colors = ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"];

  return (
    <div className="syncfusion-icons custom">
        {sizes.map((size, index) => (
          <div className="icon-grid" key={size}>
            <div className="icon-container">
              <SearchIcon width={size} height={size} color={colors[index]} />
            </div>
            <p className="icon-description">{`${size} X ${size}`}px </p>
            <p className="icon-description">({colors[index]})</p>
          </div>
        ))}
    </div>
  );
}