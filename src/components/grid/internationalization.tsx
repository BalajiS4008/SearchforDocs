import { Grid, Columns, Column, TextAlign, FilterBarType, ColumnType, EditType } from '@syncfusion/react-grid';
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
import { L10n, loadCldr,Provider, setCurrencyCode } from '@syncfusion/react-base';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import { appointmentSchedule } from './appointmentDetails';
import { PropertyColumn, PropertyPane, PropertyRow } from '../../common/property-pane';

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
    { text: 'English', value: 'en-US' },
    { text: 'German - Germany*', value: 'de' },
    { text: 'Arabic*', value: 'ar' },
    { text: 'Chinese - China*', value: 'zh' }
  ];
  const dropdownFields = { text: 'text', value: 'value' };
  // Handle culture change with currency and RTL updates.
  const changeCulture = (args?: ChangeEventArgs) => {
    const locale = args?.value as string;
    setLocale(locale);

    if (args?.value === "ar") {
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
              <DropDownList width={470} dataSource={cultureOptions as { [key: string]: object }[]} value={locale} fields={dropdownFields} onChange={changeCulture} />
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Provider locale={locale}>
        <Grid dataSource={appointmentSchedule} locale={locale} enableRtl={enableRtl} searchSettings={{ enabled: true }} editSettings={editSettings} toolbar={toolbarOptions} pageSettings={{ enabled:true, pageSize: 8, pageCount:4 }} filterSettings={{enabled: true}} >
          <Columns>
            <Column field="AppointmentID" headerText="ID" isPrimaryKey={true} width={80} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} />
            <Column field="CustomerName" headerText="Customer Name" width={120} />
            <Column field="ServiceType" headerText="Service Type" width={105} />
            <Column field="ServiceDurationHours" headerText="Service Duration (Hours)" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} edit={{ type: EditType.NumericTextBox }} width={170} />
            <Column field="AppointmentDate" headerText="Appointment Date" format='yMd'  type={ColumnType.Date} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.DatePicker}} width={140} edit={{ type: EditType.DatePicker }}/>
            <Column field="Location" headerText="Location" width={85} edit={{ type: EditType.DropDownList }} />
          </Columns>
        </Grid>
      </Provider>
    </>
  );
};