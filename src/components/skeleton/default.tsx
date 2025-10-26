import { Skeleton, Variants } from "@syncfusion/react-notifications";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <Skeleton variant={Variants.Rectangle} width='100px' height={130} />
        </div>
    );
}