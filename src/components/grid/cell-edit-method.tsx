import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, PageSettings, EditSettings, ClipMode, TextAlign, EditType } from '@syncfusion/react-grid';
import { Button } from "@syncfusion/react-buttons";
import { useRef, useState } from 'react';
import { bookCatalog } from './libraryDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  const gridRef = useRef<GridRef>(null);
  // State to manage sort, filter, edit and page settings.
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const itemIDRules = { required: true, number: true };
  const itemNameRules = { required: true };
  const ratingRules = { required: true, min: 1, max: 5 };
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  // Updates the Rating cell value for BookID 102 and disables the button.
  const cellvalue = () => {
    gridRef?.current?.setCellValue?.(202, 'Title', "Changed", true);
    setIsButtonDisabled(true);
  };

  return (
    // Grid component with external button to update cell value.
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button style={{ marginRight: '5px' }} onClick={cellvalue} disabled={isButtonDisabled}>Update Cell Value</Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid id="grid" ref={gridRef} dataSource={bookCatalog} editSettings={editSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field='BookID' headerText='Book ID' width='100' textAlign={TextAlign.Right} isPrimaryKey={true} validationRules={itemIDRules}/>
          <Column field='Title' headerText='Title' width='170' clipMode={ClipMode.EllipsisWithTooltip} validationRules={itemNameRules}/>
          <Column field="Author" headerText="Author" width="120" />
          <Column field="Genre" headerText="Genre" width="110" />
          <Column field='Language' headerText='Language' edit={{ type: EditType.DropDownList }} width='115' />
          <Column field='Rating' headerText='Rating' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} validationRules={ratingRules} width='120' />
        </Columns>
      </Grid>
    </>
  );
}
