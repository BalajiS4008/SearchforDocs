import { SnippetItem } from '../../common/snippet'

export const chartNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-charts' }
];

export const chartImport: SnippetItem[] = [
    { title: "App.tsx", code: `import { Chart } from "@syncfusion/react-charts";` }
];

export const chartSnippet: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chart, ChartSeriesCollection, ChartSeries } from "@syncfusion/react-charts";
        export default function App() {
            const data = [
                { x: 2016, y: 4.8 },
                { x: 2017, y: 5.2 },
                { x: 2018, y: 6.2 },
                { x: 2019, y: 7.8 },
                { x: 2020, y: 9.3 },
                { x: 2021, y: 14.3 },
                { x: 2022, y: 15.6 },
                { x: 2023, y: 16.0 },
                { x: 2024, y: 17.0 }
            ];
            return (
                <Chart>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="x" yField="y" />
                    </ChartSeriesCollection>
                </Chart>
            );
        }`
    }
]

export const chartTitle: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMajorGridLines, ChartMajorTickLines, ChartArea, ChartTitle, ChartTooltip } from "@syncfusion/react-charts";
        export default function App() {
            return (
                <Chart id="overview-title">
                    <ChartTitle text="Sales Analysis"/>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="month" yField="sales" type="Column" />
                    </ChartSeriesCollection>
                </Chart>
            );
        }
        `
    }
]

export const chartMarker: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMajorGridLines, ChartMajorTickLines, ChartArea, ChartMarker } from "@syncfusion/react-charts";
        export default function App() {
            return (
                <Chart id="overview-marker">
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="month" yField="sales" type="Column">
                            <ChartMarker visible={true} />
                        </ChartSeries>
                    </ChartSeriesCollection>
                </Chart>
            );
        }
        `
    }
]

export const chartLabel: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMajorGridLines, ChartMajorTickLines, ChartArea, ChartMarker, ChartDataLabel } from "@syncfusion/react-charts";
        export default function App() {
            return (
                <Chart id="overview-label">
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="month" yField="sales" type="Column">
                            <ChartMarker>
                                <ChartDataLabel visible={true}/>
                            </ChartMarker>
                        </ChartSeries>
                    </ChartSeriesCollection>
                </Chart>
            );
        }`
    }
]

export const chartTooltip: SnippetItem[] = [
    {
        title: "App.tsx", code: `import { Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries, ChartMajorGridLines, ChartMajorTickLines, ChartArea, ChartTooltip, ChartLegend } from "@syncfusion/react-charts";
        export default function App() {
            return (
                <Chart id="overview-tooltip">
                    <ChartTooltip enable={true} />
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="month" yField="sales" type="Column" />
                    </ChartSeriesCollection>
                </Chart>
            );
        }
        `
    }
]

export const chartLegend: SnippetItem[] = [
    {
        title: "App.tsx", code: `import {
            Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeriesCollection, ChartSeries,
            ChartMajorGridLines, ChartMajorTickLines, ChartArea, ChartLegend
        } from "@syncfusion/react-charts";
        export default function App() {            
            return (
                <Chart id="overview-legend">
                    <ChartLegend visible={true}/>
                    <ChartSeriesCollection>
                        <ChartSeries dataSource={data} xField="month" yField="sales" name='Sales' type="Column" />
                    </ChartSeriesCollection>
                </Chart>
            );
        }
        `
    }
]