import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, AggregateColumnProps, FilterBarType, TextAlign, ClipMode, AggregateType } from '@syncfusion/react-grid';
import { foodOrderQueue, FoodOrderItem } from './foodOrderDetails';
import { ReactElement, useState } from 'react';


export type CustomSummaryType = (data: object[] | object, column: AggregateColumnProps) => number;

export default function App() {
// Initialize state for filter and sort settings.    
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });

  // Custom aggregate function to count the number of Margherita Pizza orders.
  const customAggregateFn: CustomSummaryType = (data) => {
    const dataArray = Array.isArray(data) ? data as FoodOrderItem[] : (data as { result: FoodOrderItem[] }).result || [];
    const count = dataArray.filter((item: FoodOrderItem) => item.FoodName === 'Margherita Pizza').length;
    return count;
  };

  // Custom aggregate function to sum the Price for Margherita Pizza orders.
  const pizzaPriceSumAggregateFn: CustomSummaryType = (data) => {
    const dataArray = Array.isArray(data) ? data as FoodOrderItem[] : (data as { result: FoodOrderItem[] }).result || [];
    const sum = dataArray
      .filter((item: FoodOrderItem) => item.FoodName === 'Margherita Pizza')
      .reduce((total: number, item: FoodOrderItem) => total + (item.Price || 0), 0);
    return sum;
  };

  // Footer templates for displaying the results.
  const pizzaCountFooter = (props: object | undefined): ReactElement => {
    const typedProps = props as { Custom: number | string };
    return (<span>Pizza Count: {typedProps.Custom}</span>);
  };

  // Footer template for Pizza Revenue.
  const pizzaPriceFooter = (props: object | undefined): ReactElement => {
    const typedProps = props as { Custom: number | string };
    return (<span>Pizza Revenue: ${typedProps.Custom}</span>);
  };
  // Render grid with food order data, settings, and aggregates.
  return (
    <div>
      <Grid dataSource={foodOrderQueue} filterSettings={filterSettings} sortSettings={sortSettings} height={300}>
        <Columns>
          <Column field="OrderNumber" headerText="Order ID" width="100" textAlign={TextAlign.Right} />
          <Column field="CustomerName" headerText="Customer Name" width="150" />
          <Column field="FoodName" headerText="Food Name" width="150" clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field="Price" headerText="Price" width="180" textAlign={TextAlign.Right} format="C2"  filter={{ filterBarType: FilterBarType.NumericTextBox }} />
          <Column field="CuisineType" headerText="Cuisine Type" width="130" />
          <Column field="Status" headerText="Status" width="100" />
        </Columns>
        <Aggregates>
          <AggregateRow>
            <AggregateColumn field="FoodName" type={AggregateType.Custom} customAggregate={customAggregateFn} footerTemplate={pizzaCountFooter} />
            <AggregateColumn field="Price" type={AggregateType.Custom} customAggregate={pizzaPriceSumAggregateFn} footerTemplate={pizzaPriceFooter} />
          </AggregateRow>          
        </Aggregates>
      </Grid>
    </div>
  );
}