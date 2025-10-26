import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartAxisLabel, ChartTooltip, ChartTitle, ChartAxisTitle, ChartMarker, ChartZoomSettings } from '@syncfusion/react-charts';
import { temperatureData } from './temperature-data';
import { ThemeContext } from '../../common/context';
import { useCallback, useContext, useRef, useState } from 'react';
export default function App() {
    const { themeName } = useContext(ThemeContext);
    const [events, setEvents] = useState<string[]>([]);
    const mouseMoveTimeoutRef: React.RefObject<number | null> = useRef<number | null>(null);
    const lastMouseMoveTime: React.RefObject<number> = useRef<number>(0);

    const updateEvents = useCallback((eventName: string) => {
        setEvents(prevEvents => {
            const newEvents = [...prevEvents, `${eventName}`];
            return newEvents.slice(-50);
        });
    }, []);
    const chartTheme = themeName === 'material3-dark' ? 'Material3Dark' : 'Material3';
    const onMouseMove = useCallback(() => {
        const now = Date.now();
        if (mouseMoveTimeoutRef.current) {
            clearTimeout(mouseMoveTimeoutRef.current);
        }
        if (now - lastMouseMoveTime.current > 200) {
            lastMouseMoveTime.current = now;
            updateEvents("onMouseMove");
        } else {
            mouseMoveTimeoutRef.current = window.setTimeout(() => {
                lastMouseMoveTime.current = Date.now();
                updateEvents("onMouseMove");
            }, 200);
        }
    }, [updateEvents]);

    const onClick = (): void => {
        updateEvents("onClick");
    };
    const onPointClick = (): void => {
        updateEvents("onPointClick");
    };
    const onAxisLabelClick = (): void => {
        updateEvents("onAxisLabelClick");
    };
    const onLegendClick = (): void => {
        updateEvents("onLegendClick");
    };
    return (
        <div style={{ height: "600px" }}>
            <div>
                <Chart theme={chartTheme} height='400' onMouseMove={onMouseMove} onClick={onClick} onPointClick={onPointClick} onAxisLabelClick={onAxisLabelClick} onLegendClick={onLegendClick}>
                    <ChartZoomSettings selectionZoom={true} toolbar={{visible: true}} />
                    <ChartTitle text="2024 US Temperature Trends with Hottest, Coldest, and Average Records" />                    
                    <ChartTooltip enable={true} shared={true} headerText='${point.x}'  format='${series.name} : <b>${point.y}</b>' />
                    <ChartPrimaryXAxis valueType="Category" interval={1}>                        
                        <ChartAxisLabel intersectAction={"Rotate90"} />
                    </ChartPrimaryXAxis>
                    <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={120}>                        
                        <ChartAxisLabel format='{value}°F' />
                        <ChartAxisTitle text="Temperature (°F)" />
                    </ChartPrimaryYAxis>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={temperatureData} xField='x' yField='min' name='Max Temp' width={2} type='Spline'>
                            <ChartMarker visible={true} />
                        </ChartSeries>
                        <ChartSeries dataSource={temperatureData} xField='x' yField='avg' name='Avg Temp' width={2} type='Spline'>
                            <ChartMarker visible={true} />
                        </ChartSeries>
                        <ChartSeries dataSource={temperatureData} xField='x' yField='max' name='Min Temp' width={2} type='Spline'>
                            <ChartMarker visible={true} />
                        </ChartSeries>
                    </ChartSeriesCollection>
                </Chart>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Event Log</h3>
                {events.length > 0 ? (
                    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead style={{ position: 'sticky', top: 0, background: themeName === 'material3-dark' ? '#2c3e50' : '#f5f5f5' }}>
                                <tr>
                                    <th style={{ padding: '8px', textAlign: 'left' }}>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={index} style={{ borderTop: '1px solid #ddd',  background: index % 2 === 0 ? (themeName === 'material3-dark' ? '#1a1a1a' : '#f9f9f9') : 'transparent' }}>
                                        <td style={{ padding: '8px' }}>{event}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : null}
            </div>
        </div>
    );
}