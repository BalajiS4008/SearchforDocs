import { Chart, ChartTitle, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartAxisTitle, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartAxisLabel
} from '@syncfusion/react-charts';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/react-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    // DataManager with take(10)
    const data = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new UrlAdaptor()
    });
    const { chartTheme } = useChartTheme();
    const query = new Query().take(10);
    return (
        <Chart theme={chartTheme}>
            <ChartTitle text='Current Salary per Employee' />
            <ChartPrimaryXAxis valueType="Category">
                <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : -45} />
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={20000} minimum={0} maximum={120000}>
                <ChartAxisTitle text="Current Salary (USD)" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries type='Column' dataSource={data} xField='Employees' fill='#8DDFCB' yField='CurrentSalary' query={query} cornerRadius={{ topLeft: Browser.isDevice ? 8 : 10, topRight: Browser.isDevice ? 8 : 10 }} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} headerText='${point.x}'  format='Salary: <b>$${point.y}</b>' />
        </Chart>
    );
};