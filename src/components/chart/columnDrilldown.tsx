import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection, ChartTooltip, ChartTitle, ChartAxisLabel, ChartSubtitle, ChartLegend, AxisLabelClickEvent, PointClickEvent, ChartAxisTitle } from "@syncfusion/react-charts";
import { useState } from 'react';
import { columnDrillDownData } from "./drilldown-data";
import { useChartTheme } from "./theme";
import { Browser } from "@syncfusion/react-base";
interface DataPoint { x: string | number; y: number; color?: string; }
export default function App() {
    const { chartTheme } = useChartTheme();
    // Current state management
    const [currentData, setSeriesData] = useState<object[]>(columnDrillDownData);
    const [currentTitle, setCurrentTitle] = useState<string | undefined>('Top Populated Continents - 2023');
    const [currentSubTitle, setCurrentSubTitle] = useState<string>('A Look at Population Rankings and Trends in 2023');
    const [yAxisInterval, setYAxisInterval] = useState<number | undefined>(1000);
    const [clicked, setClicked] = useState<boolean>(false);
    const drillDownCollection: DataPoint[][] = [[{ y: 1422, x: 'China', color: '#EDA9ED' }, { y: 1438, x: 'India', color: '#EDA9ED' }, { y: 278, x: 'Indonesia', color: '#EDA9ED' }, { y: 240, x: 'Pakistan', color: '#EDA9ED' }, { y: 173, x: 'Bangladesh', color: '#EDA9ED' }, { y: 125, x: 'Japan', color: '#EDA9ED' }, { y: 117, x: 'Philippines', color: '#EDA9ED' }, { y: 99, x: 'Vietnam', color: '#EDA9ED' }], [{ y: 223, x: 'Nigeria', color: '#EDA9ED' }, { y: 126, x: 'Ethiopia', color: '#EDA9ED' }, { y: 113, x: 'Egypt', color: '#EDA9ED' }, { y: 68, x: 'Tanzania', color: '#EDA9ED' }, { y: 60, x: 'South Africa', color: '#EDA9ED' }, { y: 55, x: 'Kenya', color: '#EDA9ED' }, { y: 48, x: 'Uganda', color: '#EDA9ED' }], [{ y: 143, x: 'Russia', color: '#EDA9ED' }, { y: 84, x: 'Germany', color: '#EDA9ED' }, { y: 67, x: 'United Kingdom', color: '#EDA9ED' }, { y: 65, x: 'France', color: '#EDA9ED' }, { y: 59, x: 'Italy', color: '#EDA9ED' }, { y: 47, x: 'Spain', color: '#EDA9ED' }], [{ y: 339, x: 'United States', color: '#EDA9ED' }, { y: 127, x: 'Mexico', color: '#EDA9ED' }, { y: 39, x: 'Canada', color: '#EDA9ED' }, { y: 19, x: 'Guatemala', color: '#EDA9ED' }, { y: 10, x: 'Honduras', color: '#EDA9ED' }, { y: 6, x: 'El Salvador', color: '#EDA9ED' }, { y: 6, x: 'Nicaragua', color: '#EDA9ED' }, { y: 5, x: 'Costa Rica', color: '#EDA9ED' }], [{ y: 26, x: 'Australia', color: '#EDA9ED' }, { y: 9, x: 'Papua New Guinea', color: '#EDA9ED' }, { y: 5, x: 'New Zealand', color: '#EDA9ED' }]];;
    const reset: (e: React.MouseEvent<HTMLAnchorElement>) => void = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setCurrentTitle('Top Populated Continents of 2023');
        setCurrentSubTitle('A Look at Population Rankings and Trends in 2023');
        setYAxisInterval(1000);
        setSeriesData(columnDrillDownData);
        setClicked(false);
        (e.target as HTMLButtonElement).style.visibility = 'hidden';
        (document.getElementById('symbol') as HTMLElement).style.visibility = 'hidden';
        (document.getElementById('text') as HTMLElement).style.visibility = 'hidden';
    };
    // Handle x interaction
    const handlePointClick: (args: PointClickEvent) => void = (args: PointClickEvent) => {
        if (!clicked) {
            setClicked(true);
            setYAxisInterval(undefined);
            document.getElementById('text')!.innerHTML = (columnDrillDownData[args.pointIndex] as DataPoint).x.toString();
            document.getElementById('category')!.style.visibility = 'visible';
            document.getElementById('symbol')!.style.visibility = 'visible';
            document.getElementById('text')!.style.visibility = 'visible';
            setCurrentTitle(`Top Populated Countries of ${(columnDrillDownData[args.pointIndex] as DataPoint).x} - 2023`);
            setSeriesData(drillDownCollection[args.pointIndex]);
        }
    };
    const handleAxisLabelClick: (args: AxisLabelClickEvent) => void = (args: AxisLabelClickEvent) => {
        if (!clicked) {
            setClicked(true);
            setYAxisInterval(undefined);
            document.getElementById('text')!.innerHTML = args.text;
            document.getElementById('text')!.style.visibility = 'visible';
            document.getElementById('category')!.style.visibility = 'visible';
            document.getElementById('symbol')!.style.visibility = 'visible';
            setCurrentTitle((`Top Populated Countries of ${args.text} - 2023`));;
            setSeriesData(drillDownCollection[args.index]);
        }
    };
    return (
        <div>
            <style>{`
    .no-underline { 
      text-decoration: none !important; 
      cursor: auto !important; 
    } 
    #column-drilldown_0_AxisLabel_0, #column-drilldown_0_AxisLabel_1, #column-drilldown_0_AxisLabel_2, #column-drilldown_0_AxisLabel_3, #column-drilldown_0_AxisLabel_4, 
    #column-drilldown_Series_0_Point_0, #column-drilldown_Series_0_Point_1, #column-drilldown_Series_0_Point_2, #column-drilldown_Series_0_Point_3, #column-drilldown_Series_0_Point_4, 
    #column-drilldown_0_AxisLabel_5 { 
      text-decoration: underline; 
      cursor: pointer; 
    } 
    #category:hover { 
      cursor: pointer; 
    }
  `}</style>
            <div id="link">
                <a id="category" style={{ visibility: 'hidden', display: 'inline-block', color: '#EDA9ED', textDecoration: 'underline' }} onClick={reset}>Population</a>
                <p style={{ visibility: 'hidden', display: 'inline-block' }} id="symbol">&nbsp;&gt;&gt;&nbsp;</p>
                <p id="text" style={{ visibility: 'hidden', display: 'inline-block' }}></p>
            </div>
            <Chart theme={chartTheme} onPointClick={handlePointClick} onAxisLabelClick={handleAxisLabelClick} >
                <ChartSubtitle text={currentSubTitle}></ChartSubtitle>
                <ChartTitle text={currentTitle} />
                <ChartPrimaryXAxis interval={1} valueType="Category" >
                    <ChartAxisLabel rotationAngle={Browser.isDevice ? -45 : 0} />
                </ChartPrimaryXAxis>
                <ChartPrimaryYAxis interval={yAxisInterval} lineStyle={{ width: 0 }}>
                    <ChartAxisTitle text='Population (in Millions)' />
                </ChartPrimaryYAxis>
                <ChartSeriesCollection>
                    <ChartSeries dataSource={currentData} xField="x" yField="y" name="Population" type="Column" columnSpacing={0.3} cornerRadius={{ topLeft: 5, topRight: 5 }} colorField="color" />
                </ChartSeriesCollection>
                <ChartTooltip enable={true}  format="${point.x} : <b>${point.y} Millions</b>" />
                <ChartLegend visible={false} />
            </Chart>
        </div>
    );
}