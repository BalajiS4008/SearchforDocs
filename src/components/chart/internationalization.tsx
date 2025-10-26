import { Chart, ChartAxisLabel, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTitle, ChartTooltip } from '@syncfusion/react-charts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import { L10n, loadCldr, Provider, setCulture } from '@syncfusion/react-base';
import * as numbers from '@syncfusion/react-cldr-data/main/ar/all.json';
import * as currencies from '@syncfusion/react-cldr-data/main/ar/currencies.json';
import * as Decurrencies from '@syncfusion/react-cldr-data/main/de/currencies.json';
import * as Denumbers from '@syncfusion/react-cldr-data/main/de/numbers.json';
import * as Frcurrencies from '@syncfusion/react-cldr-data/main/fr/currencies.json';
import * as Frnumbers from '@syncfusion/react-cldr-data/main/fr/numbers.json';
import * as Zhcurrencies from '@syncfusion/react-cldr-data/main/zh/currencies.json';
import * as Zhnumbers from '@syncfusion/react-cldr-data/main/zh/numbers.json';
import * as numberingSystems from '@syncfusion/react-cldr-data/supplemental/numberingSystems.json';
import Localization from './locale.json';
import { internationalizationData } from './global-data';
import { useChartTheme } from './theme';

L10n.load({
    'de': Localization['de'],
    'fr-CH': Localization['fr-CH'],
    'ar': Localization['ar'],
    'zh': Localization['zh'],
});

export default function App() {
    const [locale, setLocale] = useState('en-US');
    const { chartTheme } = useChartTheme();

    const cultureOptions: { [key: string]: unknown }[] = [
        { text: 'English', value: 'en-US' },
        { text: 'German - Germany*', value: 'de' },
        { text: 'French - Switzerland*', value: 'fr-CH' },
        { text: 'Arabic*', value: 'ar' },
        { text: 'Chinese - China*', value: 'zh' }
    ];

    const dropdownFields = { text: 'text', value: 'value' };

    const changeCulture = (args?: ChangeEventArgs) => {
        const selectedLocale = args?.value as string;
        setLocale(selectedLocale);
        setCulture(selectedLocale);

        switch (selectedLocale) {
            case 'de':
                loadCldr(Decurrencies, Denumbers);
                break;
            case 'fr-CH':
                loadCldr(Frcurrencies, Frnumbers);
                break;
            case 'zh':
                loadCldr(Zhcurrencies, Zhnumbers);
                break;
            case 'ar':
                loadCldr(currencies, numbers, numberingSystems);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', width: '306px' }}>
                <label htmlFor="culture-select" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>🌐 Select Language:</label>
                <DropDownList width={470} dataSource={cultureOptions as { [key: string]: object }[]} value={locale} fields={dropdownFields} onChange={changeCulture} />
            </div>
            <Provider locale={locale} >
                <Chart theme={chartTheme} palettes={["#87CEEB", "#F6B53F", "#6FAAB0", "#C4C24A"]}>
                    <ChartTitle text="Service Fee by Customer" />
                    <ChartPrimaryXAxis valueType='Category' />
                    <ChartPrimaryYAxis>
                        <ChartAxisLabel format='C2'></ChartAxisLabel>
                    </ChartPrimaryYAxis>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={internationalizationData} xField='x' yField='y' type='Bar' colorField='barColor' cornerRadius={{ topRight: 5, bottomRight: 5 }} />
                    </ChartSeriesCollection>
                    <ChartTooltip enable={true} format='${point.x}: <b>${point.y}</b>' />
                </Chart>
            </Provider>
        </div>
    );
}
