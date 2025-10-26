import { useState } from 'react';
import { Grid, Column, Columns, TextAlign, FilterBarType, ColumnType, EditType, ClipMode } from '@syncfusion/react-grid';
import { L10n, loadCldr, Provider } from '@syncfusion/react-base';
import { RadioButton, RadioButtonChangeEvent } from '@syncfusion/react-buttons';
import * as likelySubtags from '@syncfusion/react-cldr-data/supplemental/likelySubtags.json';
import * as enAllData from '@syncfusion/react-cldr-data/main/en/all.json';
import * as deAllData from '@syncfusion/react-cldr-data/main/de/all.json';
import * as frAllData from '@syncfusion/react-cldr-data/main/fr/all.json';
import * as zhAllData from '@syncfusion/react-cldr-data/main/zh/all.json';
import * as numberingSystemData from '@syncfusion/react-cldr-data/supplemental/numberingSystems.json';
import * as currencyData from '@syncfusion/react-cldr-data/supplemental/currencyData.json';
import english from '@syncfusion/react-locale/src/en-US.json';
import german from '@syncfusion/react-locale/src/de.json';
import french from '@syncfusion/react-locale/src/fr.json';
import chinese from '@syncfusion/react-locale/src/zh.json';
import { orderDetails } from '../components/grid/orderDetails';
import './locale.css';

loadCldr(enAllData, deAllData, frAllData, zhAllData, numberingSystemData, currencyData, likelySubtags);

// Load localization data for multiple cultures.
L10n.load({ ...english, ...german, ...french, ...chinese });

export default function App() {
  const [locale, setLocale] = useState('en-US');
  const editSettings = { allowEdit: true, allowAdd: true, allowDelete: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  const handleLocaleChange = (args: RadioButtonChangeEvent) => {
    setLocale(args.value);
  };

  return (
    <div className='change-locale'>
      <div className='radiobtn-locale'>
        <RadioButton label='English' name='locale' value='en-US' checked={locale === 'en-US'} onChange={handleLocaleChange} />
        <RadioButton label='French' name='locale' value='fr' checked={locale === 'fr'} onChange={handleLocaleChange} />
        <RadioButton label='German' name='locale' value='de' checked={locale === 'de'} onChange={handleLocaleChange} />
        <RadioButton label='Chinese' name='locale' value='zh' checked={locale === 'zh'} onChange={handleLocaleChange} />
      </div>
      <Provider locale={locale}>
        <Grid dataSource={orderDetails} editSettings={editSettings} toolbar={toolbarOptions} pageSettings={{ enabled: true, pageSize: 5, pageCount: 4 }}>
          <Columns>
            <Column field='OrderID' headerText='Order ID' width='100' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }}></Column>
            <Column field='CustomerName' headerText='Customer Name' width='140' clipMode={ClipMode.EllipsisWithTooltip}></Column>
            <Column field='OrderDate' headerText='Order Date' width='170' edit={{ type: EditType.DatePicker }} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.DatePicker }} format='yMd' />
            <Column field="ShipName" headerText="Ship Name" clipMode={ClipMode.EllipsisWithTooltip} width="150" />
            <Column field='ShipCountry' headerText='Ship Country' width='140' edit={{ type: 'dropdownedit' }}></Column>
            <Column field='Freight' headerText='Freight Charges' width='140' format='C2' textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }} edit={{ type: EditType.NumericTextBox }} />
          </Columns>
        </Grid>
      </Provider>
    </div>
  );
}