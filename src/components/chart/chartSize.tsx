import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartTooltip, ChartAxisLabel, ChartTitle, ChartMarker } from "@syncfusion/react-charts";
import { appearanceData } from './appearance-data';
import { useChartTheme } from './theme';

export default function App() {
    const { chartTheme } = useChartTheme();
    const [isPercentage, setIsPercentage] = useState(false);
    const [chartWidth, setChartWidth] = useState(isPercentage ? 75 : 350); // Default width
    const [chartHeight, setChartHeight] = useState(isPercentage ? 75 : 450); // Default height
    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChartWidth(Number(event.target.value));
    };
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChartHeight(Number(event.target.value));
    };
    const toggleDimensions = () => {
        setIsPercentage(prev => !prev);
        setChartWidth(isPercentage ? 350 : 75);
        setChartHeight(isPercentage ? 450 : 75);
    };
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="dimensionType"><b>Dimension Type:</b> </label>
                <select id="dimensionType" onChange={toggleDimensions} value={isPercentage ? "percentage" : "pixel"} style={{
                    marginBottom: 12, marginLeft: '10px', padding: '6px 40px 6px 12px', appearance: 'none',
                    background: `
            url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 
            no-repeat right 20px center / 12px 8px`,
                    border: '1px solid #ccc', borderRadius: '4px', width: '125px', color: chartTheme.includes('Dark') ? 'white' : 'black', backgroundColor: chartTheme.includes('Dark') ? '#333' : 'white'
                }}>
                    <option value="percentage">Percentage</option>
                    <option value="pixel">Pixel</option>
                </select>
            </div>
            {!isPercentage ?
                (<div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="widthSlider" style={{ display: 'block', marginBottom: '5px' }}>
                            Width: {`${chartWidth}px`}
                        </label>
                        <input id="widthSlider" type="range" min={100} max={800} value={chartWidth} onChange={handleWidthChange} style={{ width: '60%' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="heightSlider" style={{ display: 'block', marginBottom: '5px' }}>
                            Height: {`${chartHeight}px`}
                        </label>
                        <input id="heightSlider" type="range" min={100} max={800} value={chartHeight} onChange={handleHeightChange} style={{ width: '60%' }} />
                    </div>
                </div>) : <></>
            }
            <Chart theme={chartTheme} height={`${isPercentage ? chartHeight + '%' : chartHeight}px`} width={`${isPercentage ? chartWidth + '%' : chartWidth}px`}>
                <ChartTitle text="Sales Analysis" />
                <ChartTooltip enable={true} headerText="${point.x}"  format="Sales : <b>${point.y}</b>" />
                <ChartPrimaryXAxis lineStyle={{ width: 0 }} valueType="Category" />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }} interval={10}>
                    <ChartAxisLabel format='${value}K' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={appearanceData} fill={"#AF6DFF"} xField="month" yField="sales" type="Line">
                        <ChartMarker visible={true} />
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
        </div>
    );
}