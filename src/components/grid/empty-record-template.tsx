import { Grid, Columns, Column, TextAlign } from '@syncfusion/react-grid';
import './emptyRecordTemplate.css';

export default function App() {

    const emptyRecordTemplate = () => {
        let src: string = '';
        if (document.body.classList.value.indexOf('dark') > -1 || document.body.classList.value.indexOf('highcontrast') > -1) {
            src = "/images/grid/emptyRecordTemplate_dark.svg";
        } else {
            src = "/images/grid/emptyRecordTemplate_light.svg";
        }
        return (
            <div className='sf-empty-record-template'>
                <img src={src} className="sf-empty-record" alt="No record"/>
                <span>There is no data available to display at the moment.</span>
            </div>
        );
    };
    return (
        <div>
        <Grid
            dataSource={[]}
            emptyRecordTemplate={emptyRecordTemplate}
          >
            <Columns>
              <Column
                field="OrderID"
                headerText="Order ID"
                width={180}
                textAlign={TextAlign.Right}
              />
              <Column
                field="CustomerID"
                headerText="Customer Name"
                width={150}
              />
              <Column
                field="OrderDate"
                headerText="Order Date"
                width={130}
                textAlign={TextAlign.Right}
                format='yMd'
              />
              <Column
                field="ShipCountry"
                headerText="Ship Country"
                width={150}
              />
              <Column
                field="Freight"
                headerText="Freight Charges"
                width={120}
                textAlign={TextAlign.Right}
                format='C2'
              />
            </Columns>
          </Grid>
        </div>
    );
};