import {
  Chart, ChartPrimaryXAxis, ChartPrimaryYAxis, ChartSeries, ChartSeriesCollection,
  ChartArea, ChartAxisLabel, ChartMajorTickLines, ChartMajorGridLines, ChartAxisTitle, ChartTooltip, ChartLegend,
  ChartMarker
} from '@syncfusion/react-charts';
import { Grid, Columns, Column, ColumnTemplateProps, SortSettings, TextWrapSettings, WrapMode, TextAlign } from '@syncfusion/react-grid';
import './salesRevenueDetails.css';
import React, { useCallback, useMemo, useState } from 'react';
import { productSalesReport, ProductDataTemplate } from './salesRevenueDetails';

export default function App() {
  
// Enable sorting functionality for the grid.
  const [sortSettings] = useState<SortSettings>({ enabled: true });

  // Enable text wrapping for grid headers.
  const [textWrapSettings] = useState<TextWrapSettings>({ enabled: true, wrapMode: WrapMode.Header });

  // Template to render a mini chart showing bi-monthly sales trends.
  const chartTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
  const Sales = (props?.data as ProductDataTemplate).Sales;

  const averageData = [
    { x: 'Jan-Feb', y: Sales['Jan-Feb'] },
    { x: 'Mar-Apr', y: Sales['Mar-Apr'] },
    { x: 'May-Jun', y: Sales['May-Jun'] },
    { x: 'Jul-Aug', y: Sales['Jul-Aug'] },
    { x: 'Sep-Oct', y: Sales['Sep-Oct'] },
    { x: 'Nov-Dec', y: Sales['Nov-Dec'] }
  ];

    return (
      <Chart id={`spline-${(props?.data as ProductDataTemplate).Product}`} height='90px'>
        <ChartArea border={{ width: 0 }} />
        <ChartTooltip enable={true} shared={true} headerText='<b>${point.x}<b>' format='${series.name} : <b>${point.y}</b>' />
        <ChartPrimaryXAxis valueType="Category" interval={1} visible={false}>
          <ChartMajorGridLines width={0} />
          <ChartAxisLabel intersectAction={"Rotate90"} />
        </ChartPrimaryXAxis>
        <ChartPrimaryYAxis lineStyle={{ width: 0 }} minimum={0} maximum={1000} visible={false}>
          <ChartMajorTickLines width={0} />
          <ChartAxisLabel format='${value}' />
          <ChartAxisTitle text="Sales ($)" />
        </ChartPrimaryYAxis>
        <ChartSeriesCollection>
          <ChartSeries dataSource={averageData} xField="x" yField="y" width={2} type="Line">
            <ChartMarker visible={true} width={8} height={8} />
          </ChartSeries>
        </ChartSeriesCollection>
        <ChartLegend visible={false} />
      </Chart>
    );
  }, []);

  // Template to render product image and name.
  const imageTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    return (
      <div className='sf-product-info'>
        <img src={`/images/grid/product/${(props?.data as ProductDataTemplate).Image}.png`} alt={(props?.data as ProductDataTemplate).Product} />
        <span>{(props?.data as ProductDataTemplate).Product}</span>
      </div>
    );
  }, []);

  return useMemo(() => (
    // Memoized Grid component to prevent unnecessary re-renders.
    <Grid dataSource={productSalesReport} sortSettings={sortSettings} className='sales-trend' 
        height='400' textWrapSettings={textWrapSettings}>
      <Columns>
        <Column field="Product" headerText="Products" width={180} template={imageTemplate} />
        <Column field="Category" headerText="Categories" width={110} />
        <Column field="Year" headerText="Year" textAlign={TextAlign.Right} width={80} />
        <Column field="Online" headerText="Sales Trends by Bi-Monthly Periods (Jan-Dec)" textAlign={TextAlign.Center} width={250} template={chartTemplate}/>
        <Column field="Retail" headerText="Retail" format="C2" textAlign={TextAlign.Right} width={100} />
        <Column field="ProfitLoss" headerText="Profit/Loss" format="C2" textAlign={TextAlign.Right} width={120} />
        <Column field="UnitsSold" headerText="Units Sold" textAlign={TextAlign.Right} width={120} />
        <Column field="Revenue" headerText="Revenue" format="C2" textAlign={TextAlign.Right} width={120} />
      </Columns>
    </Grid>
  ), [chartTemplate, imageTemplate]);
}
