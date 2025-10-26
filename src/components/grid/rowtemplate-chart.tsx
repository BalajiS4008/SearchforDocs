import { Column, Columns, Grid, TextAlign } from '@syncfusion/react-grid';
import {Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries,
    ChartTooltip, 
    ChartArea,
    ChartMajorGridLines,
    ChartAxisLabel,
    ChartMajorTickLines,
    ChartAxisTitle,
    ChartMarker,
    ChartLegend} from '@syncfusion/react-charts';
import './gadgetsPurchaseData.css';
import { gadgetsPurchaseData, ChartDataItem, GadgetsPurchaseList } from './gadgetsPurchaseData';
import { salesData } from './gadgetSalesData';

// Retrieves chart data for a given employee ID.
const getChartData = (): ChartDataItem[] => {
    const randomIndex = Math.floor(Math.random() * salesData.length);
    const employeePerformance = salesData[randomIndex];
    return employeePerformance.chartData;
};

export default function App() {

    const getAvatarClass = (colorTheme: string): string => {
        switch (colorTheme) {
            case 'Red': return 'customer-avatar avatar-red';
            case 'Blue': return 'customer-avatar avatar-blue';
            case 'Green': return 'customer-avatar avatar-green';
            case 'Orange': return 'customer-avatar avatar-orange';
            case 'Purple': return 'customer-avatar avatar-purple';
            default: return 'customer-avatar avatar-blue';
        }
    };

    const rowTemplate = (props: GadgetsPurchaseList) => {
        return (
            <tr className="template-row">
                <td className="template-cell">
                    <div className="customer-info">
                        <div className={getAvatarClass(props.customerDetails.colorTheme)}>{props.customerDetails.initial}</div>
                        <div className="customer-details">
                            <span className="customer-name">{props.customerDetails.name}</span>
                            <span className="customer-email">{props.customerDetails.email}</span>
                        </div>
                    </div>
                </td>
                <td className="template-cell">
                    <div className="product-info">
                        <img className="product-image" src={`/images/grid/items/${props.product.image}`} alt={props.product.name} />
                        <span>{props.product.name}</span>
                    </div>
                </td>
                <td className="template-cell">
                    <div className="chart-container">         
                    <Chart id={`chart-${props.id}`} height='90px'>
                        <ChartArea border={{ width: 0 }} />
                        <ChartTooltip enable={true} shared={true} headerText='<b>${point.x}<b>' format='${series.name} : <b>${point.y}</b>' />
                        <ChartPrimaryXAxis valueType="Category" interval={1} visible={false}>
                        <ChartMajorGridLines width={0} />
                        <ChartAxisLabel intersectAction={"Rotate90"} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={1000} visible={false}>
                        <ChartMajorTickLines width={0} />
                        <ChartAxisLabel format='${value}' />
                        <ChartAxisTitle text="Sales ($)" />
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                        <ChartSeries dataSource={getChartData()} xField="month" yField="sales" width={2} type="Line">
                            <ChartMarker visible={true} width={8} height={8} />
                        </ChartSeries>
                        </ChartSeriesCollection>
                        <ChartLegend visible={false} />
                    </Chart>
                    </div>
                </td>
                <td className="template-cell">
                    <span className={`status-badge ${props.status.toLowerCase()}`}>{props.status}</span>
                </td>
            </tr>
        );
    };

    return (
        <div>
            <Grid dataSource={gadgetsPurchaseData} rowTemplate={rowTemplate} height={400} className="row-template">
                <Columns>
                    <Column headerText='Sales Representative' width='220' />
                    <Column headerText='Product' width='150'/>
                    <Column headerText='Sales' textAlign={TextAlign.Center} width='220' />
                    <Column headerText='Payment Status' width='130' textAlign={TextAlign.Center} />
                </Columns>
            </Grid>
        </div>
    );
};
