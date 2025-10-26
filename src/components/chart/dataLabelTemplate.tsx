import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMarker, ChartDataLabel } from "@syncfusion/react-charts";
import { labelTemplateData } from './data-source'
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const CustomTooltip = (args: any) => {
    //     if (!args) { return null; }
    //     return (
    //         <div id="Tooltip">
    //             <table style={{ width: "100%", border: "1px solid black" }} className="table-borderless">
    //                 <tbody>
    //                     <tr>
    //                         <th rowSpan={2} style={{ backgroundColor: "#C1272D" }}>
    //                             <img src="grain.png" alt="Grain" />
    //                         </th>
    //                         <td
    //                             style={{
    //                                 height: "25px", width: "50px", backgroundColor: "#C1272D", fontSize: "14px", color: "#E7C554", fontWeight: "bold", paddingLeft: "5px"
    //                             }} >
    //                             {args.x}
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td
    //                             style={{
    //                                 height: "25px", width: "50px", backgroundColor: "#C1272D", fontSize: "18px", color: "#FFFFFF", fontWeight: "bold", paddingLeft: "5px"
    //                             }} >
    //                             {args.y}
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //     );
    // };
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const dataLabelTemplate = (args: any) => {
    //     return <CustomTooltip {...args} />;
    // };
    return (
        <Chart theme={chartTheme}>
            <ChartPrimaryXAxis valueType="Category"/>            
            <ChartPrimaryYAxis lineStyle={{ width: 0 }}/>
            <ChartSeriesCollection>
                <ChartSeries dataSource={labelTemplateData} xField="sports" yField="boys" type="Column" cornerRadius={{ topRight: 5, topLeft: 5 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} position="Outer" font={{ color: 'black' }}/>
                    </ChartMarker>
                </ChartSeries>
                <ChartSeries dataSource={labelTemplateData} xField="sports" yField="girls" type="Column" cornerRadius={{ topRight: 5, topLeft: 5 }}>
                    <ChartMarker>
                        <ChartDataLabel visible={true} position="Outer" font={{ color: 'black' }} />
                    </ChartMarker>
                </ChartSeries>
            </ChartSeriesCollection>
        </Chart>
    );
}