import { Color, Fab, FabPosition } from '@syncfusion/react-buttons';
import { SaveIcon, CopyIcon, CutIcon } from '@syncfusion/react-icons';

export default function App() {
  return (
    <div className="sf-pos-relative heigth-200">
      <Fab icon={<SaveIcon />} position={FabPosition.TopLeft} color={Color.Secondary}></Fab>
      <Fab icon={<CutIcon />} position={FabPosition.TopCenter} color={Color.Secondary}></Fab>
      <Fab icon={<CopyIcon />} position={FabPosition.TopRight} color={Color.Secondary}></Fab>
      <Fab icon={<SaveIcon />} position={FabPosition.MiddleLeft}></Fab>
      <Fab icon={<CutIcon />} position={FabPosition.MiddleCenter}></Fab>
      <Fab icon={<CopyIcon />} position={FabPosition.MiddleRight}></Fab>
      <Fab icon={<SaveIcon />} color={Color.Success} position={FabPosition.BottomLeft}></Fab>
      <Fab icon={<CutIcon />} color={Color.Warning} position={FabPosition.BottomCenter} ></Fab>
      <Fab icon={<CopyIcon />} color={Color.Error} position={FabPosition.BottomRight}></Fab>
    </div>
  );
}