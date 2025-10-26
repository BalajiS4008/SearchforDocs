import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartTitle, ChartAxisLabel, ChartLegend } from "@syncfusion/react-charts";
import { tooltipTemplateData } from './tooltip-template-data'
import { useChartTheme } from "./theme";

// interface TooltipArgs {
//     x: number;
//     y: number;
//     data?: {
//         pointX: number;
//         pointY: number;
//     };
// };

// interface EnergyDataPoint {
//     x: number;
//     Coal: number;
//     Oil: number;
//     NaturalGas: number;
//     Nuclear: number;
// };

// interface EnergySource {
//     name: string;
//     value: number;
//     color: string;
// };

export default function App() {

    const { chartTheme } = useChartTheme();
    // const tooltipTemplate = (args: TooltipArgs) => {
    //     const year = args.x;
    //     const pointData = tooltipTemplateData.find((item: EnergyDataPoint) => item.x === year);

    //     if (!pointData) return null;

    //     const formatNumber = (value: number) => new Intl.NumberFormat('en-US').format(value);

    //     const energySources: EnergySource[] = [
    //         { name: 'Coal', value: pointData.Coal, color: '#3498db' },
    //         { name: 'Oil', value: pointData.Oil, color: '#e91e63' },
    //         { name: 'NaturalGas', value: pointData.NaturalGas, color: '#ff9800' },
    //         { name: 'Nuclear', value: pointData.Nuclear, color: '#4caf50' },
    //     ];

    //     // Calculate total energy consumption
    //     const totalValue = energySources.reduce((acc, source) => acc + source.value, 0);

    //     return (
    //         <div style={{
    //             color: '#333', // Added horizontal padding
    //             borderRadius: '6px',
    //             fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    //             minWidth: '230px',
    //             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    //             zIndex: 1000,
    //             background: '#313033'
    //         }}>
    //             <div style={{
    //                 fontWeight: 'bold',
    //                 fontSize: '14px',
    //                 marginBottom: '2px',
    //                 textAlign: 'center',
    //                 color: 'white',
    //                 padding: '2px',
    //                 borderRadius: '4px'
    //             }}>
    //                 {year} <br />
    //                 <span style={{ fontSize: '12px', color: 'white' }}>in terawatt-hours</span>
    //             </div>
    //             {/* Separator */}
    //                 <div style={{
    //                     borderTop: '1px solid #e0e0e0',
    //                     margin: '12px 8px', // Added horizontal margin
    //                     width: 'calc(100% - 16px)' // Accounts for padding
    //                 }} />
    //             <div style={{ marginTop: '8px', padding: '0px 16px', paddingBottom: '8px'}}>
    //                 {energySources.map((source, index) => (
    //                     <div key={index} style={{
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                         justifyContent: 'space-between',
    //                         margin: '10px 0',
    //                         fontSize: '12px',
    //                         padding: '0 8px' // Added horizontal padding
    //                     }}>
    //                         <div style={{ display: 'flex', alignItems: 'center' }}>
    //                             <span style={{
    //                                 width: '10px',
    //                                 height: '10px',
    //                                 borderRadius: '50%',
    //                                 background: source.color,
    //                                 marginRight: '12px',
    //                                 display: 'inline-block'
    //                             }}></span>
    //                             <span style={{ color: 'white', fontWeight: '500' }}>
    //                                 {source.name}
    //                             </span>
    //                         </div>
    //                         <span style={{ fontWeight: 'bold', color: 'white' }}>
    //                             {formatNumber(source.value)} TWh
    //                         </span>
    //                     </div>
    //                 ))}

    //                 {/* Separator */}
    //                 <div style={{
    //                     borderTop: '1px solid #e0e0e0',
    //                     margin: '12px 8px', // Added horizontal margin
    //                     width: 'calc(100% - 16px)' // Accounts for padding
    //                 }} />

    //                 {/* Total */}
    //                 <div style={{
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'space-between',
    //                     margin: '8px 0',
    //                     fontSize: '12px',
    //                     padding: '0 8px' // Added horizontal padding
    //                 }}>
    //                     <div style={{ display: 'flex', alignItems: 'center' }}>
    //                         <span style={{
    //                             width: '10px',
    //                             height: '10px',
    //                             borderRadius: '50%',
    //                             background: '#333',
    //                             marginRight: '12px',
    //                             display: 'inline-block'
    //                         }}></span>
    //                         <span style={{ color: 'white', fontWeight: '500' }}>
    //                             Total
    //                         </span>
    //                     </div>
    //                     <span style={{ fontWeight: 'bold', color: 'white' }}>
    //                         {formatNumber(totalValue)} TWh
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <Chart theme={chartTheme}>
            <ChartTitle text="Global Primary Energy Consumption by Source (1994-2024)"/>            
            <ChartPrimaryXAxis valueType={'Double'}>                
            </ChartPrimaryXAxis>
            <ChartPrimaryYAxis minimum={0} lineStyle={{ width: 0 }} interval={20000}>                
                <ChartAxisLabel format="{value}TWh" />
            </ChartPrimaryYAxis>
            <ChartSeriesCollection>
                <ChartSeries dataSource={tooltipTemplateData} xField="x" yField="Coal" name="Coal" type="Line" dashArray="4,4" fill={"#0A97B0"}/>
                <ChartSeries dataSource={tooltipTemplateData} xField="x" yField="Oil" name="Oil" type="Line" dashArray="4,4" fill={"#FF204E"}/>
                <ChartSeries dataSource={tooltipTemplateData} xField="x" yField="NaturalGas" name="Natural Gas" type="Line" dashArray="4,4" fill={"#474E93"}/>
                <ChartSeries dataSource={tooltipTemplateData} xField="x" yField="Hydropower" name="Hydro Power" type="Line" dashArray="4,4" fill={"#92AD20"} />
            </ChartSeriesCollection>
            <ChartTooltip enable={true} shared={true} showHeaderLine={true} />
            <ChartLegend visible={true}/>
        </Chart>
    )
}
