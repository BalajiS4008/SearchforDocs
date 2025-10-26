import { AnimationType, Skeleton, Variants } from "@syncfusion/react-notifications";

export default function App() {
    return (
        <div className="component-section">
            <div className="samples-container">
                <div className="sample-card">
                    <div className="sample-label">Fade</div>
                    <div className="sample-content">
                        <Skeleton variant={Variants.Text} animation={AnimationType.Fade} width={300} height={30} />
                    </div>
                </div>
                <div className="sample-card">
                    <div className="sample-label">Pulse</div>
                    <div className="sample-content">
                        <Skeleton variant={Variants.Text} animation={AnimationType.Pulse} width={300} height={30} />
                    </div>
                </div>
                <div className="sample-card">
                    <div className="sample-label">Wave</div>
                    <div className="sample-content">
                        <Skeleton variant={Variants.Text} animation={AnimationType.Wave} width={300} height={30} />
                    </div>
                </div>
                <div className="sample-card">
                    <div className="sample-label">None</div>
                    <div className="sample-content">
                        <Skeleton variant={Variants.Text} animation={AnimationType.None} width={300} height={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}