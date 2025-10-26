import { Color, Fab, FabPosition, Size } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
      <div className='component-section flex-wrap sf-align-center gap-30 heigth-50'>
        <div className='sf-pos-relative min-width-100 heigth-50'>
          <Fab size={Size.Small} color={Color.Info} position={FabPosition.MiddleCenter}>Small</Fab>
        </div>
        <div className='sf-pos-relative min-width-200 heigth-50'>
          <Fab color={Color.Info} position={FabPosition.MiddleCenter}>Normal</Fab>
        </div>
        <div className='sf-pos-relative min-width-200 heigth-50'>
          <Fab size={Size.Large} color={Color.Info} position={FabPosition.MiddleRight}>Large</Fab>
        </div>
    </div>
  );
}
