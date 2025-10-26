import { Grid, Column, Columns, TextAlign, FilterBarType, ColumnType, EditType, ClipMode } from '@syncfusion/react-grid';
import { L10n, Provider } from '@syncfusion/react-base';
import french from '@syncfusion/react-locale/src/fr.json';
import { orderDetails } from '../components/grid/orderDetails';

L10n.load(french);

export default function App() {
  const editSettings = { allowEdit: true, allowAdd: true, allowDelete: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  return (
      <Provider locale={'fr'}>
        <Grid dataSource={orderDetails} editSettings={editSettings} toolbar={toolbarOptions}  pageSettings={{ enabled: true, pageSize: 5, pageCount: 4 }}>
          <Columns>
            <Column field='OrderID' headerText='Order ID' width='100' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}></Column>
            <Column field='CustomerName' headerText='Customer Name' width='140' clipMode={ClipMode.EllipsisWithTooltip}></Column>
            <Column field='OrderDate' headerText='Order Date' width='170' edit={{ type: EditType.DatePicker }} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} format='yMd' />
            <Column field="ShipName" headerText="Ship Name" clipMode={ClipMode.EllipsisWithTooltip} width="150"  />
            <Column field='ShipCountry' headerText='Ship Country' width='140' edit={{ type: 'dropdownedit' }}></Column>
            <Column field='Freight' headerText='Freight Charges' width='140' format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} edit={{ type: EditType.NumericTextBox }}/>
          </Columns>
        </Grid>
      </Provider>
  );
}