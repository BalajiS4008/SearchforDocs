import { Grid, Column, Columns, TextAlign, EditType } from '@syncfusion/react-grid';
import { L10n, loadCldr, Provider, setCurrencyCode } from '@syncfusion/react-base';
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useCallback, useMemo, useState } from 'react';
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
import { salesDetailsData } from './salesData';
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
    // Manage locale and RTL state for both grids.
    const [locale, setLocale] = useState('en');
    const [localeSecond, setLocaleSecond] = useState('fr');
    const [enableRtl, setEnableRtl] = useState(false);
    const [enableRtlSecond, setEnableRtlSecond] = useState(false);
    // Configure grid editing and toolbar options.
    const editSettings = { allowEdit: true, allowAdd: true, allowDelete: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const cultureOptions: { [key: string]: unknown }[] = [
        { text: 'English', value: 'en' },
        { text: 'German - Germany*', value: 'de' },
        { text: 'French - Azerbaijan*', value: 'fr' },
        { text: 'Arabic*', value: 'ar' },
        { text: 'Chinese - China*', value: 'zh' },
    ];
    const dropdownFields = { text: 'text', value: 'value' };
    // Handle culture change for first grid with currency/RTL updates.
    const changeCulture = useCallback((args?: ChangeEventArgs) => {
        setLocale(args?.value as string);
        if (args?.value === "ar") {
            setEnableRtl(true);
        } else {
            setEnableRtl(false);
        }

        switch (args?.value) {
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
    }, [])
    // Handle culture change for second grid with currency/RTL updates.
    const changeCultureSecond = useCallback((args?: ChangeEventArgs) => {
        setLocaleSecond(args?.value as string);
        if (args?.value === "ar") {
            setEnableRtlSecond(true);
        } else {
            setEnableRtlSecond(false);
        }

        switch (args?.value) {
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
    }, [])
    // Render dual grids with localization dropdowns.
    return (
        <>
            <PropertyPane title='Change Language for Grid Localization Properties' style={{ maxHeight: '210px' }}>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <label style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '16px' }}>
                                Shipped Detail Data Grid
                            </label>
                            {useMemo(() => (
                                <DropDownList
                                    style={{ width: '200px' }}
                                    dataSource={cultureOptions as { [key: string]: object }[]}
                                    value={'English'}
                                    placeholder='Select language'
                                    fields={dropdownFields}
                                    onChange={changeCulture}
                                />
                            ), [])}
                        </div>
                    </PropertyRow>
                </PropertyColumn>
                <PropertyColumn>
                    <PropertyRow>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <label style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '16px' }}>
                                Product Data Grid
                            </label>
                            {useMemo(() => (
                                <DropDownList
                                    style={{ width: '200px' }}
                                    dataSource={cultureOptions as { [key: string]: object }[]}
                                    value={'French'}
                                    placeholder='Select language'
                                    fields={dropdownFields}
                                    onChange={changeCultureSecond}
                                />
                            ), [])}
                        </div>
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <div style={{width: '100%',  overflowX: 'auto'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-around',
                    gap: '30px',
                    minWidth: 'fit-content',
                    paddingBottom: '10px'
                }}>
                    {/* First Grid */}
                    <Provider locale={locale}>
                        <Grid
                            dataSource={orderDetails}
                            width={500}
                            enableRtl={enableRtl}
                            editSettings={editSettings}
                            toolbar={toolbarOptions}
                            pageSettings={{ enabled: true, pageSize: 5, pageCount: 1 }}
                        >
                            <Columns>
                                <Column field='OrderID' headerText='Order ID' textAlign={TextAlign.Right} isPrimaryKey={true} ></Column>
                                <Column field='CustomerID' headerText='Customer ID'></Column>
                                <Column field='OrderDate' headerText='Order Date' edit={{ type: EditType.DatePicker }} format='yMd' textAlign={TextAlign.Right} />
                                <Column field='Freight' headerText='Freight Charges' format='C2' edit={{ type: EditType.NumericTextBox }} textAlign={TextAlign.Right} />
                            </Columns>
                        </Grid>
                    </Provider>

                    {/* Second Grid */}
                    <Provider locale={localeSecond}>
                        <Grid
                            dataSource={salesDetailsData}
                            width={500}
                            enableRtl={enableRtlSecond}
                            editSettings={editSettings}
                            toolbar={toolbarOptions}
                            pageSettings={{ enabled: true, pageSize: 5, pageCount: 1 }}
                        >
                            <Columns>
                                <Column field='ProductId' headerText='Product ID' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={{ required: true, number: true }} />
                                <Column field='Product' headerText='Product' validationRules={{ required: true }} />
                                <Column field='StockLevel' headerText='Stock Level' edit={{ type: EditType.NumericTextBox }} textAlign={TextAlign.Right} />
                                <Column field='UnitPrice' headerText='Unit Price' format="C2" edit={{ type: EditType.NumericTextBox }} textAlign={TextAlign.Right} />
                            </Columns>
                        </Grid>
                    </Provider>
                </div>
            </div>

        </>
    );
}