import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartMarker, ChartTitle, ChartAxisLabel, ChartAxisTitle } from '@syncfusion/react-charts';
import { overviewLineData, overviewSplineAreaData, overviewColumnData, overviewBubbleData } from './overview-data'
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    return (
        <div>
            <div style={{ display: Browser.isDevice ? '' : 'flex', justifyContent: Browser.isDevice ? '' : 'space-between' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <Chart id="layout1" theme={chartTheme} height="300">
                        <ChartTitle text='Monthly Sales Growth' />                        
                        <ChartPrimaryXAxis valueType={'Category'}>
                            <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                            <ChartAxisLabel format='{value}%' />                            
                            <ChartAxisTitle text='Sales in Percentage' fontSize={Browser.isDevice ? '12px' : '14px'}/>
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={overviewLineData} xField="month" yField="growth" width={2} type="Spline" fill='#FF74B0'>
                                <ChartMarker visible={true} />
                            </ChartSeries>
                        </ChartSeriesCollection>
                        <ChartTooltip enable={true} headerText='${point.x}'  format='Sales : <b>${point.y}</b>' />
                    </Chart>
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                    <Chart id="layout2" theme={chartTheme} height="300">
                        <ChartTitle text='Total Sales by Product' />                        
                        <ChartPrimaryXAxis valueType={'Category'}>
                            <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                            <ChartAxisTitle text='Units Sold' fontSize={Browser.isDevice ? '12px' : '14px'}/>
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={overviewColumnData} xField="x" yField="y" type="Column" fill='#C08DFF' columnWidth={0.6} cornerRadius={{ topLeft: Browser.isDevice? 4 : 10, topRight: Browser.isDevice? 4 : 10 }} />
                        </ChartSeriesCollection>
                        <ChartTooltip enable={true} headerText='${point.x}'  format='Sales : <b>${point.y} Units</b>' />
                    </Chart>
                </div>
            </div>
            <div style={{ display: Browser.isDevice ? '' : 'flex', justifyContent: Browser.isDevice ? '' : 'space-between', marginTop: 50 }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <Chart id="layout3" theme={chartTheme} height="300" >
                        <ChartTitle text='Online vs Retails' />                        
                        <ChartPrimaryXAxis valueType={'Category'}>
                            <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis lineStyle={{ width: 0 }}>                            
                            <ChartAxisTitle text='Sales in Units' fontSize={Browser.isDevice ? '12px' : '14px'}/>
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={overviewSplineAreaData} xField="x" yField="y" width={2} type="SplineArea" fill='#00BFFF' name='Online' opacity={0.5} border={{ width: 2 }} />
                            <ChartSeries dataSource={overviewSplineAreaData} xField="x" yField="y1" width={2} type="SplineArea" fill='#FF00CC80' name="Retails" opacity={0.5} border={{ width: 2 }} />
                        </ChartSeriesCollection>
                        <ChartLegend visible={false} />
                        <ChartTooltip enable={true} headerText='${series.name}'  format='${point.x} : <b>${point.y} Units</b>' />
                    </Chart>
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                    <Chart id="layout4" theme={chartTheme} height="300">
                        <ChartTitle text='Product Performance' />                        
                        <ChartLegend visible={false} />
                        <ChartPrimaryXAxis valueType={'Category'}>
                            <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={1} maximum={5}>
                            <ChartAxisTitle text='Performance Rating' fontSize={Browser.isDevice ? '12px' : '14px'}/>
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={overviewBubbleData} opacity={0.9} minRadius={2} maxRadius={6} colorField='color' xField="x" yField="y3" width={2} sizeField='size' type="Bubble" tooltipField='reviewCount' />
                        </ChartSeriesCollection>
                        <ChartTooltip enable={true} headerText='${point.x}'  format={"Rating : <b>${point.y}</b><br/><b> Number of Reviews: <b>${point.tooltip} </b>"} />
                    </Chart>
                </div>
            </div>
        </div>
    );
}
