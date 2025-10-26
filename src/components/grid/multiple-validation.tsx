import { Grid, Columns, Column, GridRef, RowSelectEvent, ColumnTemplateProps, ToolbarClickEvent, FilterBarType, TextAlign, EditType, ColumnType } from '@syncfusion/react-grid';
import { customerData } from './customerDetails';
import { useCallback, useRef, useState, memo } from 'react';
import { FormState, FormValueType} from '@syncfusion/react-inputs';
import CustomerForm from './CustomerForm';
 
const initialFormState: FormState = {
  values: {},
  errors: {},
  touched: {},
  valid: {},
  allowSubmit: false,
  submitted: false,
  modified: {},
  visited: {},
  fieldNames:{},
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onFormReset: () => {},
  onSubmit: () => {},
};
 
export interface Order {
  CustomerID?: string;
  FirstName?: string;
  LastName?: string;
  Phone?: string;
  Email?: string;
  AccountNumber?: string;
  CreditCardNumber?: string;
  ExpireDate?: string;
  CardStatus?: string;
}
 
const MemoizedGrid = memo(Grid);
 
const pageSettings = { enabled: true, pageSize: 8 };
const filterSettings = { enabled: true };
const sortSettings = { enabled: true };
 
export default function App() {
  const gridRef = useRef<GridRef>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>(initialFormState); // Ensure initial state is defined
  const [selectedProduct, setSelectedProduct] = useState<Order>({});
  const [formKey, setFormKey] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit' | null>(null);
 
  const rowIndexRef = useRef<number | undefined>(null);
 
  const editSettings = { allowEdit: true, allowAdd: true, allowDelete: true };
  const toolbarOptions = [
    { id: 'add', text: 'Add new customer' },
    { id: 'edit', text: 'View or modify existing customer' },
    { id: 'delete', text: 'Remove existing customer' }
  ];
 
  const handleSubmit = useCallback((data: Record<string, FormValueType>) => {
    const index = gridRef.current?.getSelectedRowIndexes()[0];
    if (formMode === 'add') {
      const lastId = customerData.reduce((max, item) => {
        const id = parseInt((item as Order).CustomerID?.replace(/\D/g, '') || '0');
        return Math.max(max, id);
      }, 0);
      data.CustomerID = `CUST${String(lastId + 1).padStart(3, '0')}`;
      data.CardStatus = 'Active';
      gridRef.current?.addRecord(data);
    } else if (formMode === 'edit' && index !== undefined) {
      gridRef.current?.updateRecord(index, data);
    }
    setShowForm(false);
    setFormMode(null);
    setSelectedProduct({});
    setFormState(initialFormState); // Reset form state after submission.
  }, [formMode]);
 
  const rowSelected = useCallback((args?: RowSelectEvent) => {
    if (args?.selectedRowIndex !== undefined) {
      rowIndexRef.current = args.selectedRowIndex;
      const selectedData = args.data as Order;
      setSelectedProduct(selectedData); // Update selectedProduct with the selected row data.
    }
  }, []);
 
  const toolbarClickHandler = useCallback((args?: ToolbarClickEvent) => {
    if (args?.item?.id === "add") {
      setSelectedProduct({});
      setFormMode('add');
      setShowForm(true);
      gridRef.current?.clearSelection();
      setFormState(initialFormState); // Reset form state for add.
      setFormKey(prev => prev + 1); // Force re-render.
    } else if (args?.item?.id === "edit") {
       const isSelect:boolean = !gridRef.current?.getSelectedRecords()?.length? false : true; 
      if (isSelect && rowIndexRef.current !== undefined) {
        setFormMode('edit');
        setShowForm(true);
        // Explicitly set formState with selectedProduct and ensure it updates before render.
        const updatedFormState: FormState = {
          ...initialFormState,
          values: { ...selectedProduct },
          allowSubmit: true,
          valid: Object.keys(selectedProduct).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
        };
        setFormState(updatedFormState); // Set full formState object.
        setFormKey(prev => prev + 1); // Force re-render with new key.
      } else {
        alert('Please select a row to edit.');
      }
    } else if (args?.item?.id === "delete") {
      if (rowIndexRef.current !== undefined) {
        gridRef.current?.deleteRecord?.('CustomerID');
        rowIndexRef.current = undefined;
        setSelectedProduct({});
      } else {
        alert('Please select a row to delete.');
      }
    }
  }, [selectedProduct]);
 
  const acountNumberTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => (
    <div>
      <span className="card-number">{'xxxx xxxx xxxx ' + (props?.data as Order).AccountNumber?.slice(-4)}</span>
    </div>
  ), []);
 
  const cardTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => (
    <div>
      <span className="card-number">{'xxxx xxxx xxxx ' + (props?.data as Order).CreditCardNumber?.slice(-4)}</span>
    </div>
  ), []);
 
  const onCancel = () => {
    gridRef.current?.cancelDataChanges();
    setShowForm(false);
    setFormMode(null);
    setSelectedProduct({});
    setFormState(initialFormState); // Reset form state on cancel.
  }; 
 
  return (
    <div className="grid-container" ref={gridContainerRef} style={{ position: 'relative'}}>
      <MemoizedGrid
        ref={gridRef}
        dataSource={customerData}
        toolbar={toolbarOptions}
        pageSettings={pageSettings}
        editSettings={editSettings}
        filterSettings={filterSettings}
        sortSettings={sortSettings}
        onRowSelect={rowSelected}
        onToolbarItemClick={toolbarClickHandler}
      >
        <Columns>
          <Column field='CustomerID' headerText='Customer ID' width='125' filter={{ filterBarType: FilterBarType.NumericTextBox }} textAlign={TextAlign.Right} isPrimaryKey={true} />
          <Column field='FirstName' headerText='First Name' filter={{ filterBarType: FilterBarType.NumericTextBox }} width='130' />
          <Column field='LastName' headerText='Last Name' filter={{ filterBarType: FilterBarType.TextBox }} width='130' />
          <Column field='Email' headerText='Email' width='240' />
          <Column field='Phone' headerText='Phone Number' width='150' textAlign={TextAlign.Right} />
          <Column field='AccountNumber' headerText='Account Number' template={acountNumberTemplate} width='160' textAlign={TextAlign.Right} />
          <Column field='CreditCardNumber' headerText='Credit Card' template={cardTemplate} width='160' textAlign={TextAlign.Right} />
          <Column field='ExpireDate' headerText='Expire Date' width='150' type={ColumnType.Date} format='MM/yyyy' edit={{ type: EditType.DatePicker }} allowFilter={false} textAlign={TextAlign.Right} />
          <Column field='CardStatus' headerText='Card Status' filter={{ filterBarType: FilterBarType.TextBox }} width='150' />
        </Columns>
      </MemoizedGrid>
 
      <CustomerForm
        formState={formState}
        setFormState={setFormState}
        selectedProduct={selectedProduct}
        formKey={formKey}
        formMode={formMode}
        showForm={showForm}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </div>
  );
}