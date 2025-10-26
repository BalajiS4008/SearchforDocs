import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, EditSettings, EditType, TextAlign, ClipMode } from '@syncfusion/react-grid';
import { useRef, useState } from 'react';
import { employeeDirectory } from './employeeOfficialDetails';
import { L10n, Provider } from '@syncfusion/react-base';

L10n.load({
  'en-custom': {
    grid: {
      'okButtonLabel': 'YES',
      'cancelButtonLabel': 'Discard',
      'confirmDeleteMessage': 'Are you sure you want to delete the selected Record?'
    }
  }
});

export default function App() {
    const gridRef = useRef<GridRef>(null);    
    // State to manage sort, filter, edit and toolbar settings.    
    const [filterSettings] = useState<FilterSettings>({enabled: true});
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true, confirmOnDelete:true });
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const employeeIDRules = { required: true };
    const nameRules = { required: true }; 

    return (
      
      <div>
        <Provider locale='en-custom'>
          <Grid id="grid" ref={gridRef} dataSource={employeeDirectory} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} height={300}>
            <Columns>
              <Column field='EmployeeCode' headerText='Employee ID' width='70' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={employeeIDRules} />
              <Column field='Name' headerText='Name' width='70' validationRules={nameRules}/>
              <Column field='Team' headerText='Team' width='145' edit={{type:EditType.DropDownList}} />
              <Column field='Designation' headerText='Designation' width='110' clipMode={ClipMode.EllipsisWithTooltip} />
              <Column field='TeamLead' headerText='Reporter' width='90' />
            </Columns>
          </Grid>        
        </Provider>
      </div>
    );
}