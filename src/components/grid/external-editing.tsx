import { Grid, Column, Columns, GridRef, FilterSettings, SortSettings, PageSettings, EditSettings, EditType, TextAlign, FilterBarType, ClipMode } from '@syncfusion/react-grid';
import { Button } from "@syncfusion/react-buttons";
import { useRef, useState, useCallback } from 'react';
import { bookCatalog } from './libraryDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
  const gridRef = useRef<GridRef>(null);
  // State to manage sort, filter, page, edit and toolbar settings.
  const [filterSettings] = useState<FilterSettings>({ enabled: true });
  const [sortSettings] = useState<SortSettings>({ enabled: true });
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const itemIDRules = { required: true, number: true };
  const titleRules = { required: true };
  const ratingRules = { required: true, min: 1, max: 5 };
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(true);
  const [isSave, setIsSave] = useState<boolean>(true);

  // Adds a new record to the grid and enters edit mode.
  const addRecord = useCallback(() => {
    gridRef.current?.addRecord({ BookID: Math.floor(Math.random() * 500), Title: 'Satire', CatalogEntryDate: new Date(), Rating: 4.7 });
  }, []);

  // Starts editing the currently selected row.
  const editRecord = useCallback(() => {
    gridRef.current?.editRecord();
  }, []);

  // Deletes the currently selected row.
  const deleteRecord = useCallback(() => {
    gridRef.current?.deleteRecord();

  }, []);

  // Saves the changes made during editing.
  const saveRecord = useCallback(() => {
    gridRef.current?.saveDataChanges();
  }, []);

  // Cancels the current edit operation.
  const cancelEdit = useCallback(() => {
    gridRef.current?.cancelDataChanges();

  }, []);

  // Handle row selection events to update button states.
  const onRowSelected = useCallback(() => {
    setIsDeleting(false)
    setIsEditing(false)
    setIsSave(true)
    setIsAdding(true)
  }, []);

  const onRowDeselected = useCallback(() => {
    // Check if any rows are still selected
    const selected = gridRef?.current?.getSelectedRecords?.();
    if (selected) {
      setIsDeleting(true)
      setIsEditing(true)
      setIsSave(true)
      setIsAdding(false)
    }
  }, []);

  const onRowEditStart = useCallback(() => {
    setIsAdding(true);
    setIsDeleting(true)
    setIsEditing(false)
    setIsSave(false)

  }, [])
const onFormRender = useCallback(() => {

  setIsEditing(true)
},[])

  return (
    // Grid component with external button controls for record actions.
    <>
      <PropertyPane>
        <PropertyColumn>
          <PropertyRow>
            <div>
              <Button style={{ marginRight: '5px' }} onClick={addRecord} disabled={isAdding}>Add</Button>
              <Button style={{ marginRight: '5px' }} onClick={editRecord} disabled={isEditing}>Edit</Button>
              <Button style={{ marginRight: '5px' }} onClick={deleteRecord} disabled={isDeleting}>Delete</Button>
              <Button style={{ marginRight: '5px' }} onClick={saveRecord} disabled={isSave}>Save</Button>
              <Button style={{ marginRight: '5px' }} onClick={cancelEdit} disabled={isSave}>Cancel</Button>
            </div>
          </PropertyRow>
        </PropertyColumn>
      </PropertyPane>
      <Grid id="grid" ref={gridRef} dataSource={bookCatalog} editSettings={editSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}
        onRowSelect={onRowSelected} onRowDeselect={onRowDeselected} onRowEditStart={onRowEditStart} onFormRender={onFormRender}
      >
        <Columns>
          <Column field='BookID' headerText='Book ID' width='75' textAlign={TextAlign.Right} filter={{ filterBarType: FilterBarType.NumericTextBox }} isPrimaryKey={true} validationRules={itemIDRules} />
          <Column field='Title' headerText='Title' width='120' validationRules={titleRules} clipMode={ClipMode.EllipsisWithTooltip} />
          <Column field="Genre" headerText="Genre" width="119" edit={{ type: EditType.DropDownList }} />
          <Column field='Language' headerText='Language' edit={{ type: EditType.DropDownList }} width='110' />
          <Column field='PublishedYear' headerText='Published Year' width='100' textAlign={TextAlign.Right} />
          <Column field="Rating" headerText="Rating" edit={{ type: EditType.NumericTextBox }} validationRules={ratingRules} filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} width="100" />
        </Columns>
      </Grid>
    </>
  );
}
