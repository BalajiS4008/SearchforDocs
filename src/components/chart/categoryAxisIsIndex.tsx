import { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisTitle, ChartAxisLabel, ChartMarker, ChartDataLabel, ChartTooltip, ChartTitle } from '@syncfusion/react-charts';
import { chartPoint, catergoryIndexData } from './category-index-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';

export default function App() {
    const { chartTheme } = useChartTheme();
    const [isIndexed, setIsIndexed] = useState(true); // State to track if the checkbox is checked
    const handleCheckboxChange = () => {
        setIsIndexed(prev => !prev); // Toggle the isIndexed state
    };
    return (
        <div>
            <span style={{ marginTop: 0 }}>Indexed:</span>
            <input style={{ marginLeft: 10, marginTop: 10  }} type="checkbox" checked={isIndexed} onChange={handleCheckboxChange} />
            {/* Gradient Definition */}
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8C3BC8" />
                        <stop offset="100%" stopColor="#CE59FF" />
                    </linearGradient>
                </defs>
            </svg>
            <svg style={{ height: 0 }}>
                <defs>
                    <linearGradient id="gradient-fill-index" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#45AF20" />
                        <stop offset="100%" stopColor="#80C76D" />
                    </linearGradient>
                </defs>
            </svg>
            <Chart theme={chartTheme}>                
                <ChartTitle text="Indexed Category Comparison of GDP Growth Rate (%)" fontSize={Browser.isDevice ? '16px' : '18px'} />
                <ChartPrimaryXAxis valueType={'Category'} indexed={isIndexed}>                    
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />                    
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis visible={true} lineStyle={{ width: 0 }} interval={2}>                    
                    <ChartAxisTitle text='GDP Growth Rate' />
                    <ChartAxisLabel format='{value}%' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={chartPoint} xField="x" yField="y" width={2} type={isIndexed ? "Column" : "Line"} fill='url(#gradient-fill)' columnSpacing={0.2} columnWidth={0.5} cornerRadius={{ topLeft: 15, topRight: 15 }}>
                        <ChartMarker visible={!isIndexed}>
                            <ChartDataLabel visible={!Browser.isDevice} position='Top' font={{ fontSize: "11px", color: 'white' }} />
                        </ChartMarker>
                    </ChartSeries>
                    <ChartSeries dataSource={catergoryIndexData} xField="x" yField="y" width={2} columnWidth={0.5} type={isIndexed ? "Column" : "Line"} fill='url(#gradient-fill-index)' columnSpacing={0.2} cornerRadius={{ topLeft: 15, topRight: 15 }}>
                        <ChartMarker visible={!isIndexed}>
                            <ChartDataLabel visible={!Browser.isDevice} position='Top' font={{ fontSize: "11px", color: 'white' }} />
                        </ChartMarker>
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText='${point.x}'  format='Growth : <b>${point.y}</b>' />
            </Chart>
        </div>
    );
}