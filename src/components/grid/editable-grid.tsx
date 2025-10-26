import { Grid, Column, Columns, GridRef, ColumnTemplateProps, FilterSettings, SortSettings, PageSettings, EditSettings, FilterBarType } from '@syncfusion/react-grid';
import { useRef, useMemo, useCallback, useState } from 'react';
import { salesDetails, SalesRecord } from './salesTransactionDetails';

export default function App() {
  const gridRef = useRef<GridRef>(null);    
  // State to manage sort, filter, page, edit and toolbar settings.    
  const [filterSettings] = useState<FilterSettings>({enabled: true});
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 });
  const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
  const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
  const IDRules = { required: true };
  const stringValidationRules = { required: true };
  const priceRules = { required: true, min: 1, max: 500 };

  /**
   * Traverses up the DOM tree to find the parent element with the specified class.
   * @param el - Starting HTML element.
   * @param className - Target class name to match.
   * @returns The matched parent element or null.
   */
  function parentsUntil(el: HTMLElement, className: string): HTMLElement | null {
    while (el && el.parentElement) {
      el = el.parentElement;
      if (el.classList.contains(className)) {
        return el;
      }
    }
    return null;
  }

  /**
   * Cell template for Revenue field with inline editing and row update logic.
   * @param props - Cell template arguments containing row data.
   * @returns JSX input element for editing Revenue.
   */
  const gridTemplate = useCallback((props?: ColumnTemplateProps): string | React.ReactElement => (
    <input
      id={(props?.data as SalesRecord).InvoiceId}
      defaultValue={(props?.data as SalesRecord).Revenue}
      onKeyUp={(e) => {
        const row = parentsUntil(e.target as HTMLElement, 'sf-grid-content-row');
        const uid = row?.getAttribute('data-uid');
        if (uid) {
          const rowObj = gridRef.current?.getRowObjectFromUID(uid);
          if (rowObj && rowObj.index !== undefined) {
            const data = rowObj.data as SalesRecord;
            data.Revenue = parseInt((e.target as HTMLInputElement).value, 10);
            gridRef.current?.updateRecord(rowObj.index, data);
          }
        }
      }}
    />
  ), []);

  return useMemo(() => (
    /**
     * Memoized Grid component with custom cell template for Revenue column.
     */
    <div>
      <Grid id="grid" ref={gridRef} dataSource={salesDetails.slice(0,60)} editSettings={editSettings} toolbar={toolbarSettings} filterSettings={filterSettings} sortSettings={sortSettings} pageSettings={pageSettings}>
        <Columns>
          <Column field='InvoiceId' headerText='Invoice ID' width='70' textAlign='Right' isPrimaryKey={true} validationRules={IDRules} />
          <Column field='Product' headerText='Product' width='80' validationRules={stringValidationRules} />
          <Column field='Revenue' headerText='Revenue' template={gridTemplate} validationRules={priceRules} filter={{filterBarType:FilterBarType.NumericTextBox}}  width='120' />
          <Column field='CustomerType' headerText='Customer Type' width='80' validationRules={stringValidationRules} />
          <Column field='Cashier' headerText='Cashier' width='80' />
          <Column field='PaymentMethod' headerText='Payment Method' width='90' validationRules={stringValidationRules}/>
          <Column field='Country' headerText='Country' width='80' validationRules={stringValidationRules}/>
        </Columns>
      </Grid>
    </div>
  ), []);
}
