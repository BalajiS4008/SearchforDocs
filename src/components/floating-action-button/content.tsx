import { Color, Fab, FabPosition, Position } from '@syncfusion/react-buttons';
import { EditIcon, UserIcon } from '@syncfusion/react-icons';

export default function App() {
    return (
        <div className='component-section flex-wrap sf-align-center gap-30 heigth-50' >
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Primary} position={FabPosition.MiddleRight} >Text</Fab>
            </div>
            <div className='sf-pos-relative min-width-200 heigth-50'>
                <Fab iconPosition={Position.Right} color={Color.Warning} icon={<EditIcon />} position={FabPosition.MiddleCenter} >Icon and Text</Fab>
            </div>
            <div className='sf-pos-relative min-width-75 heigth-50'>
                <Fab icon={<UserIcon />} color={Color.Secondary} position={FabPosition.MiddleRight}></Fab>
            </div>
        </div>
    );
}