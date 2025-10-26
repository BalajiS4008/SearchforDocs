import { Grid, Column, Columns, SortSettings, TextAlign, ClipMode, EditSettings, FilterSettings, EditType, FilterBarType } from '@syncfusion/react-grid';
import { studentData } from './studentDetails';
import { useState } from 'react';

export default function App() {
  // Initialize state for filter, sort, toolbar and edit settings.   
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [filterSettings] = useState<FilterSettings>({enabled: true});  
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);

  const primaryValueRules = { required: true, number: true };
  const feeRules = { required: true, min: 1, max: 500 };
  return (
      <div>
        <Grid dataSource={studentData} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} height={300}  >
          <Columns>
            <Column field='RollNo' headerText='Roll No' isPrimaryKey={true} textAlign={TextAlign.Right} filter={{filterBarType:FilterBarType.NumericTextBox}} validationRules={primaryValueRules} width="140"/>
            <Column field='Mark1' headerText='Mark 1' format="N" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="150"/>
            <Column field='Mark2' headerText='Mark 2' format="N" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="150"/>
            <Column field='Mark3' headerText='Mark 3' format="N" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="150" />
            <Column field='Percentage' headerText='Percentage' format="P1" textAlign={TextAlign.Right} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} clipMode={ClipMode.EllipsisWithTooltip} width="170"/>
            <Column field='Fees' headerText='Tution Fees' format='C2' textAlign={TextAlign.Right} validationRules={feeRules} edit={{ type:EditType.NumericTextBox}} filter={{filterBarType:FilterBarType.NumericTextBox}} width="150" />
          </Columns>
        </Grid>
     </div>
    );
};