import { Grid, Columns, Column, Aggregates, AggregateColumn, AggregateRow, FilterSettings, SortSettings, PageSettings, TextAlign, FilterBarType, AggregateType } from '@syncfusion/react-grid';
import { studentData } from './studentDetails';
import { ReactElement, useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, and pagination settings.  
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount:4 });

  // Render footer template for sum aggregate.
  const footerSum = (props: object | undefined): ReactElement => {
    const typedProps = props as { Sum: number | string };
    return (<span>Sum: {typedProps.Sum}</span>);
  };

  // Render footer template for average aggregate.
  const footerAverage = (props: object | undefined): ReactElement => {
    const typedProps = props as { Average: number | string };
    return (<span>Average: {typedProps.Average}</span>);
  };

  // Render footer template for maximum aggregate.
  const footerMax = (props: object | undefined): ReactElement => {
    const typedProps = props as { Max: number | string };
    return (<span>Max: {typedProps.Max}</span>)
  }

  // Render footer template for minimum aggregate.
  const footerMin = (props: object | undefined): ReactElement => {
      const typedProps = props as { Min: number | string };
    return (<span>Min: {typedProps.Min}</span>)
  }
  // Render grid with student data, settings, and aggregates.
  return (
    <div>
     <Grid dataSource={studentData} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings} >
      <Columns>
        <Column field="RollNo" headerText="Roll No" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Mark1" headerText="Mark 1" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Mark2" headerText="Mark 2" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Mark3" headerText="Mark 3" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Mark4" headerText="Mark 4" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Mark5" headerText="Mark 5" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Average" headerText="Average" width="100" textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
        <Column field="Fees" headerText="Tuition Fees" width="130" format='C2' textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}}/>
      </Columns>
      <Aggregates>
        <AggregateRow>
          <AggregateColumn field='Mark1' type={AggregateType.Max} footerTemplate={footerMax} format='N0' />
          <AggregateColumn field='Mark2' type={AggregateType.Min} footerTemplate={footerMin} format='N0' />
          <AggregateColumn field='Mark3' type={AggregateType.Min} footerTemplate={footerMin} format='N0' />
          <AggregateColumn field='Mark4' type={AggregateType.Max} footerTemplate={footerMax} format='N0' />
          <AggregateColumn field='Mark5' type={AggregateType.Min} footerTemplate={footerMin} format='N0' />
          <AggregateColumn field='Average' type={AggregateType.Average} footerTemplate={footerAverage} format='N0' />
          <AggregateColumn field='Fees' type={AggregateType.Sum} footerTemplate={footerSum} format='C2' />
        </AggregateRow>          
      </Aggregates>
    </Grid>
   </div>
 );
}