import { useState } from 'react';
import { Grid, Column, Columns, TextAlign, FilterBarType, ColumnType, EditType, ClipMode } from '@syncfusion/react-grid';
import { L10n, loadCldr, Provider, setCurrencyCode } from '@syncfusion/react-base';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import * as enAllData from '@syncfusion/react-cldr-data/main/en/all.json';
import * as deAllData from '@syncfusion/react-cldr-data/main/de/all.json';
import * as frAllData from '@syncfusion/react-cldr-data/main/fr/all.json';
import * as arAllData from '@syncfusion/react-cldr-data/main/ar/all.json';
import * as zhAllData from '@syncfusion/react-cldr-data/main/zh/all.json';
import * as numberingSystemData from '@syncfusion/react-cldr-data/supplemental/numberingSystems.json';
import * as currencyData from '@syncfusion/react-cldr-data/supplemental/currencyData.json';
import * as enUSLocalization from '@syncfusion/react-locale/src/en-US.json';
import * as deDELocalization from '@syncfusion/react-locale/src/de.json';
import * as frFRLocalization from '@syncfusion/react-locale/src/fr.json';
import * as arFRLocalization from '@syncfusion/react-locale/src/ar.json';
import * as zhLocalization from '@syncfusion/react-locale/src/zh.json';
import { orderDetails } from './orderDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

// Load localization data for multiple cultures.
L10n.load({
  ...enUSLocalization,
  ...deDELocalization,
  ...frFRLocalization,
  ...zhLocalization,
  ...arFRLocalization
});

export default function App() {
  // Manage locale and RTL state for grid display.
  const [locale, setLocale] = useState('fr');
  const [enableRtl, setEnableRtl] = useState(false);
  // Configure grid editing and toolbar options.
  const editSettings = { allowEdit: true, allowAdd: true, allowDelete: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const cultureOptions: { [key: string]: unknown }[] = [
    { text: 'French - Azerbaijan*', value: 'fr' },
    { text: 'English', value: 'en' },
    { text: 'German - Germany*', value: 'de' },
    { text: 'Arabic*', value: 'ar' },
    { text: 'Chinese - China*', value: 'zh' },
  ];
  const dropdownFields = { text: 'text', value: 'value' };
  // Handle culture change and update currency/RTL settings.
  const changeCulture = (args?: ChangeEventArgs) => {
    const locale = args?.value as string;
    setLocale(locale);
    if (locale === "ar") {
      setEnableRtl(true);
    } else {
      setEnableRtl(false);
    }

    switch (locale) {
      case 'de':
        setCurrencyCode('EUR');
        loadCldr(deAllData, numberingSystemData, currencyData);
        break;
      case 'fr':
        setCurrencyCode('AZN');
        loadCldr(frAllData, numberingSystemData, currencyData);
        break;
      case 'zh':
        setCurrencyCode('CNY');
        loadCldr(zhAllData, numberingSystemData, currencyData);
        break;
      case 'ar':
        setCurrencyCode('AED');
        loadCldr(arAllData, numberingSystemData, currencyData);
        break;
      default:
        setCurrencyCode('USD');
        loadCldr(enAllData, numberingSystemData, currencyData);
        break;
    }
  };
  // Render dropdown and grid with localization support.
  return (
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '336px' }}>
              <label htmlFor="culture-select" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>🌐 Select Language:
              </label>
              <DropDownList id="culture-select" width={150} dataSource={cultureOptions as { [key: string]: object }[]} value={locale} fields={dropdownFields} onChange={changeCulture} />
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Provider locale={locale}>
        <Grid dataSource={orderDetails} enableRtl={enableRtl} editSettings={editSettings} toolbar={toolbarOptions} filterSettings={{ enabled: true }} pageSettings={{ enabled: true, pageSize: 8, pageCount: 4 }}>
          <Columns>
            <Column field='OrderID' headerText='Order ID' width='100' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }}></Column>
            <Column field='CustomerName' headerText='Customer Name' width='140' clipMode={ClipMode.EllipsisWithTooltip}></Column>
            <Column field='OrderDate' headerText='Order Date' width='170' edit={{ type: EditType.DatePicker }} type={ColumnType.Date} textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.DatePicker }} format='yMd' />
            <Column field="ShipName" headerText="Ship Name" clipMode={ClipMode.EllipsisWithTooltip} width="150" />
            <Column field='ShipCountry' headerText='Ship Country' width='140' edit={{ type: EditType.DropDownList }}></Column>
            <Column field='Freight' headerText='Freight Charges' width='140' format='C2' textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }} edit={{ type: EditType.NumericTextBox }} />
          </Columns>
        </Grid>
      </Provider>
    </>
  );
}