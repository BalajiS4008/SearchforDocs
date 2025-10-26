import { Skeleton, Variants } from "@syncfusion/react-notifications";
import "./SkeletonVariants.css";

export default function App() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="sample-label">Text</div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Text} width="100%" height={20} />
        </div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Text} width={200} height={20} />
        </div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Text} width="100px" height={20} />
        </div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Text} width='10rem' height={20} />
        </div>
      </div>
      <div className="grid-item">
        <div className="sample-label">Circle</div>
        <div className="sample-content circle">
          <Skeleton variant={Variants.Circle} width={40} height={50} />
          <Skeleton variant={Variants.Circle} width={60} height={50} />
          <Skeleton variant={Variants.Circle} width={80} height={50} />
          <Skeleton variant={Variants.Circle} width={100} height={50} />
        </div>
      </div>
      <div className="grid-item">
        <div className="sample-label">Rectangle</div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Rectangle} width="100%" height={50} />
        </div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Rectangle} width="60%" height={30} />
        </div>
        <div className="sample-content text">
          <Skeleton variant={Variants.Rectangle} width="30%" height={30} />
        </div>
      </div>
      <div className="grid-item">
        <div className="sample-label">Square</div>
        <div className="sample-content circle">
          <Skeleton variant={Variants.Square} width={40} />
          <Skeleton variant={Variants.Square} width={60} />
          <Skeleton variant={Variants.Square} width={80} />
          <Skeleton variant={Variants.Square} width={100} />
        </div>
      </div>
    </div>

  );
}