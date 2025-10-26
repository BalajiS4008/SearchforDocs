import { Tooltip } from '@syncfusion/react-popups';
import './App.css';

export default function App() {

    function content() {
        return (
            <div id='tooltipContent' className='profile-card'>
                <div className='product-details'>
                    <h3 className='product-name'> Price : $8.00</h3>
                    <p className='description'>A milkshake is a sweet, cold beverage that is usually made from milk, ice cream, or iced milk, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup. This delicious treat is often enjoyed as a dessert or a refreshing snack on a warm day.</p>
                </div>
            </div>
        );
    }

    return (<div className="component-section tooltip-section">
        <div className="card">
            <Tooltip content={content} width={'300px'} height={'100px'}>
                <img className="card-image" src="https://ej2.syncfusion.com/demos/src/listview/images/milkshake.jpg" alt="Milkshake Image" />
            </Tooltip>
            <div className="card-title">
                <h4>Milkshake</h4>
            </div>
        </div>
    </div>);
}