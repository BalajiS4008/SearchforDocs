import { useState } from 'react';
import { Chart, ChartLegend, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartMarker, ChartAxisTitle } from '@syncfusion/react-charts';
import { pagingData } from './legend-paging-data';
import { useChartTheme } from './theme';
import { Browser } from '@syncfusion/react-base';
export default function App() {
    const { chartTheme } = useChartTheme();
    const [shapeHeight, setShapeHeight] = useState(25);
    const [shapeWidth, setShapeWidth] = useState(25);
    const [shapePadding, setShapePadding] = useState(30);
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: Browser.isDevice ? 'stretch' : 'center', flexDirection: Browser.isDevice ? 'column' : 'row' , marginBottom: '20px'}}>
                <label style={{ marginRight: '10px' }}>Shape Height:</label>
                <input type="range" min="10" max="50" value={shapeHeight} onChange={(e) => setShapeHeight(Number(e.target.value))} style={{ marginRight: '20px' }} />
                <label style={{ marginRight: '10px' }}>Shape Width:</label>
                <input type="range" min="10" max="50" value={shapeWidth} onChange={(e) => setShapeWidth(Number(e.target.value))} style={{ marginRight: '20px' }} />
                <label style={{ marginRight: '10px' }}>Shape Padding:</label>
                <input type="range" min="0" max="50" value={shapePadding} onChange={(e) => setShapePadding(Number(e.target.value))} />
            </div>
            <Chart theme={chartTheme}>
                <ChartTitle text="Renewable Sources Used to Generate Electricity for Transport Fuels" />
                <ChartPrimaryXAxis valueType={'Category'} />
                <ChartPrimaryYAxis lineStyle={{ width: 0 }}>
                    <ChartAxisTitle text='kilotonnes of oil equivalent (ktoe)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={pagingData} xField="year" yField="Large scale Hydro" name="Large scale Hydro" type="Line" fill='#6A9C89' >
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                    <ChartSeries dataSource={pagingData} xField="year" yField="Animal biomass" name="Animal biomass" type="Line" fill='#D7B26D'>
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                    <ChartSeries dataSource={pagingData} xField="year" yField="Landfill gas" name="Landfill gas" type="Line" fill='#B3C890'>
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                    <ChartSeries dataSource={pagingData} xField="year" yField="Sewage gas" name="Sewage gas" type="Line" fill='#7695FF'>
                        <ChartMarker visible={!Browser.isDevice} shape='Circle' />
                    </ChartSeries>
                </ChartSeriesCollection>
                <ChartTooltip enable={true} headerText="${point.x}"  format='${series.name} : <b>${point.y}</b>' />
                <ChartLegend visible={true} shapeHeight={shapeHeight} shapeWidth={shapeWidth} shapePadding={shapePadding} />
            </Chart>
        </div>
    );
}