import { Skeleton, Variants } from "@syncfusion/react-notifications";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <div className="skeleton-color">
                <Skeleton variant={Variants.Square} className="skeleton-color" width='100px' height={100} />
                <Skeleton variant={Variants.Circle} className="skeleton-color" width='100px' height={100} />
            </div>
        </div>
    );
}