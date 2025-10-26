import { Grid, Columns, Column, ClipMode, TextAlign } from '@syncfusion/react-grid';
import { orderDetails } from './orderDetails';

export default function App() {

    return (
        <div>
            <Grid dataSource={orderDetails} height={400}>
                <Columns>
                    <Column field="OrderID" headerText="Order ID" width={110}  textAlign={TextAlign.Right} />
                    <Column field="CustomerID" headerText="Customer ID" width={120} />
                    <Column field="CustomerName" headerText="Customer Name" width={140} />
                    <Column field="ShipName" headerText="Ship Name" width={160} clipMode={ClipMode.EllipsisWithTooltip} />
                    <Column field="ShipCountry" headerText="Ship Country" width={120} />
                    <Column field="Freight" headerText="Freight Charges" width={110} textAlign={TextAlign.Right} format="C2"  />
                </Columns>
            </Grid>
        </div>
    );
};