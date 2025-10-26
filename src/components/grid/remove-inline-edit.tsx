import { Grid, Column, Columns, GridRef, FilterSettings, EditSettings, PageSettings, EditType, TextAlign, FilterBarType, ClipMode } from '@syncfusion/react-grid';
import { Button } from '@syncfusion/react-buttons';
import { useRef, useCallback, useState } from 'react';
import { bookCatalog } from './libraryDetails';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    // State to manage filter, edit and page settings.
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const [filterSettings] = useState<FilterSettings>({ enabled: true });
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
    const titleRules = { required: true };
    const bookIDRules = { required: true };
    const ratingRules = { required: true, min: 1, max: 5 };
    const gridRef = useRef<GridRef>(null);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(true);
  const [isSave, setIsSave] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false)


    const bookTitles = [
        'The Hobbit', '1984', 'To Kill a Mockingbird', 'Pride and Prejudice',
        'The Great Gatsby', 'The Catcher in the Rye', 'The Alchemist', 'The Da Vinci Code'
    ];
    const authors = [
        'J.R.R. Tolkien', 'George Orwell', 'Harper Lee', 'Jane Austen',
        'F. Scott Fitzgerald', 'J.D. Salinger', 'Paulo Coelho', 'Dan Brown'
    ];

    // Returns a random item from the given array.
    const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    // Returns a random rating between 1.0 and 5.0.
    const getRandomRating = () => parseFloat((Math.random() * 4 + 1).toFixed(1));

    // Adds a new record with random book details.
    const addRecord = useCallback(() => {
        gridRef.current?.addRecord({
            BookID: Math.floor(Math.random() * 1000),
            Title: getRandomItem(bookTitles),
            Author: getRandomItem(authors),
            CatalogEntryDate: new Date(),
            Rating: getRandomRating()
        });
        setIsEditing(true);
    }, []);

    // Starts editing the selected row.
    const editRecord = useCallback(() => {
        gridRef.current?.editRecord();
        setIsEditing(true);
    }, []);

    // Deletes the selected row.
    const deleteRecord = useCallback(() => {
        gridRef.current?.deleteRecord();
    }, []);

    // Updates the first row with predefined book details.
    const updateRecord = useCallback(() => {
        gridRef.current?.updateRecord(0, {
            BookID: 101,
            Title: 'The Hobbit',
            Author: 'J.R.R. Tolkien',
            CatalogEntryDate: new Date(),
            Rating: 5
        });
    }, []);

    // Saves the changes made during editing.
    const saveRecord = useCallback(() => {
        gridRef.current?.saveDataChanges();
        setIsEditing(false);
    }, []);

    // Cancels the current edit operation.
    const cancelEdit = useCallback(() => {
        gridRef.current?.cancelDataChanges();
        setIsEditing(false);
    }, []);

// Handle row selection events to update button states.
  const onRowSelected = useCallback(() => {
    setIsDeleting(false)
    setIsEditing(false)
    setIsSave(true)
    setIsAdding(true)
     setIsUpdate(false)
  }, []);

  const onRowDeselected = useCallback(() => {
    // Check if any rows are still selected
    const selected = gridRef?.current?.getSelectedRecords?.();
    if (selected) {
      setIsDeleting(true)
      setIsEditing(true)
      setIsSave(true)
      setIsAdding(false)
      setIsUpdate(false)

    }
  }, []);

  const onRowEditStart = useCallback(() => {
    setIsAdding(true);
    setIsDeleting(true)
    setIsEditing(false)
    setIsSave(false)
    setIsUpdate(true)

  }, [])
const onFormRender = useCallback(() => {
  setIsUpdate(true)
  setIsEditing(true)
},[])

    return (
        // Grid component with external button controls for record actions.
        <>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <div>
                            {/* <Button style={{ marginRight: '5px' }} onClick={addRecord} disabled={isEditing}>Add</Button>
                <Button style={{ marginRight: '5px' }} onClick={editRecord} disabled={!isRowSelected || isEditing}>Edit</Button>
                <Button style={{ marginRight: '5px' }} onClick={deleteRecord} disabled={!isRowSelected || isEditing}>Delete</Button>
                <Button style={{ marginRight: '5px' }} onClick={updateRecord} disabled={isEditing}>Update Row</Button>
                <Button style={{ marginRight: '5px' }} onClick={saveRecord} disabled={!isEditing}>Save</Button>
                <Button style={{ marginRight: '5px' }} onClick={cancelEdit} disabled={!isEditing}>Cancel</Button> */}


                            <Button style={{ marginRight: '5px' }} onClick={addRecord} disabled={isAdding}>Add</Button>
                            <Button style={{ marginRight: '5px' }} onClick={updateRecord} disabled={isUpdate}>Update Row</Button>
                            <Button style={{ marginRight: '5px' }} onClick={editRecord} disabled={isEditing}>Edit</Button>
                            <Button style={{ marginRight: '5px' }} onClick={deleteRecord} disabled={isDeleting}>Delete</Button>
                            <Button style={{ marginRight: '5px' }} onClick={saveRecord} disabled={isSave}>Save</Button>
                            <Button style={{ marginRight: '5px' }} onClick={cancelEdit} disabled={isSave}>Cancel</Button>

                        </div>   
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            <Grid ref={gridRef} dataSource={bookCatalog} editSettings={editSettings} filterSettings={filterSettings} pageSettings={pageSettings}
                onRowSelect={onRowSelected} onRowDeselect={onRowDeselected} onRowEditStart={onRowEditStart} onFormRender={onFormRender}>
                <Columns>
                    <Column field='BookID' headerText='Book ID' width='100' textAlign={TextAlign.Right} validationRules={bookIDRules} filter={{ filterBarType: FilterBarType.NumericTextBox }} isPrimaryKey={true} />
                    <Column field='Title' headerText='Title' validationRules={titleRules} clipMode={ClipMode.EllipsisWithTooltip} width='130' />
                    <Column field='Author' headerText='Author' width='120' />
                    <Column field='Genre' headerText='Genre' width='90' />
                    <Column field='Language' headerText='Language' edit={{ type: EditType.DropDownList }} width='100' />
                    <Column field='Rating' headerText='Rating' textAlign={TextAlign.Right} edit={{ type: EditType.NumericTextBox }} validationRules={ratingRules} width='100' filter={{ filterBarType: FilterBarType.NumericTextBox }} />
                </Columns>
            </Grid>
        </>
    );
}
