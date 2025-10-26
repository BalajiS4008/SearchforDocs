import {
    Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries,
    ChartMarker, ChartDataLabel
} from "@syncfusion/react-charts";
export default function App() {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    return (
        <Chart>
            
            <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category">
                
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={data} xField="month" yField="sales" type="Line">
                    <ChartMarker>
                        <ChartDataLabel visible={true}/>
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}
