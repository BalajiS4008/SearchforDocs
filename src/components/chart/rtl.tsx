// src/components/chart/rtl.tsx
import React, { useState } from 'react';
import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartMinorGridLines, ChartMajorTickLines, ChartTooltip, ChartLegend, ChartTitle, ChartAxisLabel } from '@syncfusion/react-charts';
import { Browser, Provider } from '@syncfusion/react-base';
import { useChartTheme } from './theme';
interface ChartConfig { language: 'English' | 'Arabic'; renderingDirection: 'rtl' | 'ltr'; invertXAxis: boolean; opposeYAxis: boolean; }
interface ChartData { x: string; y: number; y1: number; y2: number; }
interface ChartDataSet { data: ChartData[]; title: string; series: { gold: string; silver: string; bronze: string; }; }
export default function App() {
    const { chartTheme } = useChartTheme();
    const [config, setConfig] = useState<ChartConfig>({ language: 'Arabic', renderingDirection: 'rtl', invertXAxis: true, opposeYAxis: true });
    const chartDataSets: Record<'English' | 'Arabic', ChartDataSet> = {
        English: {
            data: [
                { x: 'Norway', y: 18, y1: 9, y2: 14 },
                { x: 'USA', y: 10, y1: 12, y2: 9 },
                { x: 'Germany', y: 14, y1: 8, y2: 6 },
                { x: 'Canada', y: 7, y1: 10, y2: 15 },
                { x: 'Netherlands', y: 9, y1: 6, y2: 5 }
            ],
            title: 'Winter Olympic medals count - 2024',
            series: {
                gold: 'Gold',
                silver: 'Silver',
                bronze: 'Bronze'
            }
        },
        Arabic: {
            data: [
                { x: 'النرويج', y: 18, y1: 9, y2: 14 },
                { x: 'الولايات المتحدة الأمريكية', y: 10, y1: 12, y2: 9 },
                { x: 'ألمانيا', y: 14, y1: 8, y2: 6 },
                { x: 'كندا', y: 7, y1: 10, y2: 15 },
                { x: 'هولندا', y: 9, y1: 6, y2: 5 }
            ],
            title: 'عدد الميداليات الأولمبية الشتوية - 2024',
            series: {
                gold: 'ذهب',
                silver: 'فضة',
                bronze: 'برونزية'
            }
        }
    };
    const currentDataSet = chartDataSets[config.language];
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value as 'English' | 'Arabic';
        setConfig(prev => ({
            ...prev,
            language: selectedLanguage,
        }));
    };
    const handleDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setConfig(prev => ({
            ...prev,
            renderingDirection: e.target.value as 'rtl' | 'ltr'
        }));
    };
    const handleInvertXAxis = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, invertXAxis: e.target.checked }));
    };
    const handleOpposeYAxis = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig(prev => ({ ...prev, opposeYAxis: e.target.checked }));
    };
    return (
        <div className="rtl-chart-container" style={{ display: Browser.isDevice ? "" : 'flex', height: '100vh' }}>
            <div className="chart-display"
                style={{ flex: 1, padding: '20px', direction: config.renderingDirection }}>
                <Provider dir={config.renderingDirection}>
                    <Chart theme={chartTheme}>
                        <ChartTitle text={currentDataSet.title} />
                        <ChartPrimaryXAxis valueType={'Category'} inverted={config.invertXAxis}>
                            <ChartMajorTickLines width={1} />
                            <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                        </ChartPrimaryXAxis>
                        <ChartPrimaryYAxis minimum={0} maximum={20} interval={4} lineStyle={{ width: 0 }} opposedPosition={config.opposeYAxis}>
                            <ChartMinorGridLines width={0} />
                        </ChartPrimaryYAxis>
                        <ChartSeriesCollection>
                            <ChartSeries dataSource={currentDataSet.data} legendShape="Rectangle" xField="x" yField="y" type="Column" name={currentDataSet.series.gold} columnSpacing={0.3} fill="#fbc137" />
                            <ChartSeries dataSource={currentDataSet.data} legendShape="Rectangle" xField="x" yField="y1" type="Column" name={currentDataSet.series.silver} columnSpacing={0.3} fill="#b1b7bc" />
                            <ChartSeries dataSource={currentDataSet.data} legendShape="Rectangle" xField="x" yField="y2" type="Column" name={currentDataSet.series.bronze} columnSpacing={0.3} fill="#8c5c45" />
                        </ChartSeriesCollection>
                        <ChartTooltip enable={true} headerText='${series.name}' format='${point.x}: <b>${point.y}</b>' />
                        <ChartLegend visible={true} inversed={config.renderingDirection === 'rtl' ? true : false} />
                    </Chart>
                </Provider>
            </div>

            <div className="property-panel"
                style={{
                    width: '300px',
                    padding: '20px',
                    backgroundColor: chartTheme.includes('Dark') ? '#1c1b1f' : '#f8f9fa',
                    borderLeft: `1px solid ${chartTheme.includes('Dark') ? '#1c1b1f' : '#dee2e6'}`,
                    direction: 'ltr'
                }}>
                <div className="panel-header">
                    <h3 style={{ marginBottom: '20px', color: chartTheme.includes('Dark') ? 'white' : '#495057' }}>Properties</h3>
                </div>
                <div className="panel-content">
                    <div className="property-section" style={{ marginBottom: '20px' }}>
                        <label className="property-label" htmlFor="language-select" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                            Language
                        </label>
                        <select id="language-select" value={config.language} onChange={handleLanguageChange} className="property-dropdown"
                            style={{ width: '100%', padding: '8px 12px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px', color: chartTheme.includes('Dark') ? 'white' : 'black', backgroundColor: chartTheme.includes('Dark') ? '#333' : 'white' }}>
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                    </div>
                    <div className="property-section" style={{ marginBottom: '20px' }}>
                        <label className="property-label"
                            htmlFor="direction-select"
                            style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px'}}>
                            Rendering Direction
                        </label>
                        <select id="direction-select" value={config.renderingDirection} onChange={handleDirectionChange} className="property-dropdown"
                            style={{ width: '100%', padding: '8px 12px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px',color: chartTheme.includes('Dark') ? 'white' : 'black', backgroundColor: chartTheme.includes('Dark') ? '#333' : 'white' }}>
                            <option value="rtl">RTL</option>
                            <option value="ltr">LTR</option>
                        </select>
                    </div>

                    <div className="property-section" style={{ marginBottom: '20px' }}>
                        <label className="property-checkbox-label"
                            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input type="checkbox" id="inverse-x-axis" checked={config.invertXAxis} onChange={handleInvertXAxis} className="property-checkbox" style={{ marginRight: '8px' }} />
                            <span className="checkbox-text" style={{ fontSize: '14px' }}>
                                Inverse x-axis
                            </span>
                        </label>
                    </div>

                    <div className="property-section" style={{ marginBottom: '30px' }}>
                        <label className="property-checkbox-label"
                            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <input type="checkbox" id="oppose-y-axis" checked={config.opposeYAxis} onChange={handleOpposeYAxis} className="property-checkbox" style={{ marginRight: '8px' }}/>
                            <span className="checkbox-text" style={{ fontSize: '14px' }}>
                                Oppose y-axis
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}