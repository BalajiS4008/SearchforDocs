import { lazy } from 'react';

const ChartContent = lazy(() => import('./index.mdx'));
const CategoryType = lazy(() => import('./categoryType.mdx'));
const NumericType = lazy(() => import('./numericType.mdx'));
const DateTimeType = lazy(() => import('./dateTimeType.mdx'));
const LogType = lazy(() => import('./logType.mdx'));
const Tooltip = lazy(() => import('./tooltip.mdx'));
const Legend = lazy(() => import('./legend.mdx'));
const Zooming = lazy(() => import('./zooming.mdx'));
const DataLabel = lazy(() => import('./dataLabel.mdx'));
const Marker = lazy(() => import('./marker.mdx'));
const Line = lazy(() => import('./line.mdx'));
const Column = lazy(() => import('./column.mdx'));
const Area = lazy(() => import('./area.mdx'));
const Spline = lazy(() => import('./spline.mdx'));
const Bar = lazy(() => import('./bar.mdx'));
const Stepline = lazy(() => import('./stepline.mdx'));
const StackingColumn = lazy(() => import('./stackingColumn.mdx'));
const StackingBar = lazy(() => import('./stackingBar.mdx'));
const Scatter = lazy(() => import('./scatter.mdx'));
const Bubble = lazy(() => import('./bubble.mdx'));
const CombinationChart = lazy(() => import('./combinationchart.mdx'));
const Stripline = lazy(() => import('./stripline.mdx'));
const SplineArea = lazy(() => import('./splineArea.mdx'));
const Appearance = lazy(() => import('./appearance.mdx'));
const GettingStarted = lazy(() => import('./gettingStarted.mdx'));
const LocalDataBindingContent = lazy(() => import('./localdatabinding.mdx'));
const RemoteDataBindingContent = lazy(() => import('./remotedatabinding.mdx'));
const Axis = lazy(() => import('./axis.mdx'));
const Label = lazy(() => import('./label.mdx'));
const RTL = lazy(() => import('./rtl.mdx'));
const Event = lazy(() => import('./event.mdx'));
const Keyboard = lazy(() => import('./keyboard.mdx'));
const Accessibility = lazy(() => import('./accessibility.mdx'))
const MultiplePane = lazy(() => import('./multiplePane.mdx'))
const Animation = lazy(() => import('./animation.mdx'));
const Product = lazy(() => import('./product.mdx'));
const Globalization = lazy(() => import('./globalization.mdx'));
const MultipleAxes = lazy(() => import('./multipleAxes.mdx'));

// The routes for the chart component

export const chartRoutes = [
    { id: 'chart', pid: 'components', name: 'Chart', label: "new", category: "Data Visualization", hasChildren: true },
    { id: 'chart-overview', pid: 'chart', name: 'Overview', category: "Chart", component: <ChartContent /> },
    { id: 'chart-started', pid: 'chart', name: 'Getting Started', category: "Chart", component: <GettingStarted /> },
    { id: 'chart-product', pid: 'chart', name: 'Real-Time Charts', category: "Chart", hasChildren: true },
    { id: 'cloud-monitoring-dashboard', pid: 'chart-product', name: 'Cloud Monitoring Dashboard', category: "Chart", component: <Product /> },
    { id: 'chart-databinding', pid: 'chart', name: 'Data Binding', category: "Chart", hasChildren: true },
    { id: 'chart-localdatabinding', pid: 'chart-databinding', name: 'Local Data', category: "Chart", hasChildren: false, component: <LocalDataBindingContent /> },
    { id: 'chart-remotedatabinding', pid: 'chart-databinding', name: 'Remote Data', category: "Chart", hasChildren: false, component: <RemoteDataBindingContent /> },
    
     { id: 'line-series', pid: 'chart', name: 'Line Charts', category: "Chart", hasChildren: true },
    { id: 'chart-line', pid: 'line-series', name: 'Line Chart', category: "Chart", component: <Line /> },
    { id: 'chart-spline', pid: 'line-series', name: 'Spline Chart', category: "Chart", component: <Spline /> },
    { id: 'chart-stepline', pid: 'line-series', name: 'Stepline Chart', category: "Chart", component: <Stepline /> },
    { id: 'area-series', pid: 'chart', name: 'Area Charts', category: "Chart", hasChildren: true },
    { id: 'chart-area', pid: 'area-series', name: 'Area Chart', category: "Chart", component: <Area /> },
    { id: 'chart-spline-area', pid: 'area-series', name: 'Spline Area Chart', category: "Chart", component: <SplineArea /> },
    { id: 'column-bar-series', pid: 'chart', name: 'Column and Bar Charts', category: "Chart", hasChildren: true },
    { id: 'chart-column', pid: 'column-bar-series', name: 'Column Chart', category: "Chart", component: <Column /> },
    { id: 'chart-bar', pid: 'column-bar-series', name: 'Bar Chart', category: "Chart", component: <Bar /> },
    { id: 'chart-stcking-column', pid: 'column-bar-series', name: 'Stacking Column Chart', category: "Chart", component: <StackingColumn /> },
    { id: 'chart-stcking-bar', pid: 'column-bar-series', name: 'Stacking Bar Chart', category: "Chart", component: <StackingBar /> },
    { id: 'bubble-scatter-series', pid: 'chart', name: 'Bubble and Scatter Charts', category: "Chart", hasChildren: true },
    { id: 'chart-scatter', pid: 'bubble-scatter-series', name: 'Scatter Chart', category: "Chart", component: <Scatter /> },
    { id: 'chart-bubble', pid: 'bubble-scatter-series', name: 'Bubble Chart', category: "Chart", component: <Bubble /> },
    { id: 'chart-combination-chart', pid: 'chart', name: 'Combination Chart', category: "Chart", component: <CombinationChart /> },

    { id: 'chart-axis', pid: 'chart', name: 'Axis Configuration', category: "Chart", hasChildren: true },
    { id: 'chart-category-axis-type', pid: 'chart-axis', name: 'Category Axis', category: "Chart", component: <CategoryType /> },
    { id: 'chart-numeric-axis-type', pid: 'chart-axis', name: 'Numeric Axis', category: "Chart", component: <NumericType /> },
    { id: 'chart-datetime-axis-type', pid: 'chart-axis', name: 'DateTime Axis', category: "Chart", component: <DateTimeType /> },
    { id: 'chart-log-axis-type', pid: 'chart-axis', name: 'Log Axis', category: "Chart", component: <LogType /> },
    { id: 'chart-label-custom', pid: 'chart-axis', name: 'Axis Labels', category: "Chart", component: <Label /> },
    { id: 'chart-axis-custom', pid: 'chart-axis', name: 'Axis Customization', category: "Chart", component: <Axis /> },
    { id: 'chart-multiple-axis', pid: 'chart-axis', name: 'Multiple Axes', category: "Chart", component: <MultipleAxes /> },
    { id: 'chart-multpile-pane', pid: 'chart-axis', name: 'Multiple Panes', category: "Chart", component: <MultiplePane /> },

   
    { id: 'chart-axis-stripline', pid: 'chart', name: 'Stripline', category:"Chart", component: <Stripline/>},
    { id: 'chart-label', pid: 'chart', name: 'DataLabel', category: "Chart", component: <DataLabel /> },
    { id: 'chart-marker', pid: 'chart', name: 'Marker', category: "Chart", component: <Marker /> },
    { id: 'chart-tooltip', pid: 'chart', name: 'Tooltip', category: "Chart", component: <Tooltip /> },
    { id: 'chart-legend', pid: 'chart', name: 'Legend', category: "Chart", component: < Legend /> },
    { id: 'chart-zooming', pid: 'chart', name: 'Zooming and Panning', category: "Chart", component: <Zooming /> },
    { id: 'chart-rtl', pid: 'chart', name: 'RTL', category: "Chart", component: <RTL /> },
    { id: 'chart-appearance', pid: 'chart', name: 'Layout and Styling', category: "Chart", component: <Appearance /> },
    { id: 'chart-animation', pid: 'chart', name: 'Animation', category: "Chart", component: <Animation /> },
    { id: 'chart-event', pid: 'chart', name: 'Events', category: "Chart", component: <Event /> },
    { id: 'chart-keyboard', pid: 'chart', name: 'Keyboard Navigation', category: "Chart", component: <Keyboard /> },
    { id: 'chart-accessible', pid: 'chart', name: 'Accessibility', category: "Chart", component: <Accessibility /> },
    { id: 'chart-globalization', pid: 'chart', name: 'Globalization', category: "Chart", component: <Globalization />}
];