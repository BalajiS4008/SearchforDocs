import { Column, ColumnProps, Columns, FilterBarType, FilterSettings, Grid, GridRef, PageSettings, TextAlign } from "@syncfusion/react-grid";
import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { DataUtil } from "@syncfusion/react-data";
import { NumericTextBox } from "@syncfusion/react-inputs";
import { DatePicker } from "@syncfusion/react-calendars";
import { useRef, useCallback, useMemo, useState} from "react";
import { orderDetails, OrderDetail } from "./orderDetails";

export default function App() {
    // Reference to the Syncfusion Grid instance.
    const gridRef = useRef<GridRef>(null);

    // State to enable paging with page size and count.
    const [pageSettings] = useState<PageSettings>({ enabled: true, pageSize: 8, pageCount: 4 }); 

    // State to enable filtering in the grid.
    const [filterSettings] = useState<FilterSettings>({ enabled: true }); 

    // Returns a dropdown filter template for the ShipCountry column.
    const shipCountryFilterTemplate = useCallback((args: { column: ColumnProps }) => {
        const distinctData = DataUtil.distinct(orderDetails, (args.column as ColumnProps).field as string, true) as OrderDetail[];
        const shipCountryDistinctData = [ 'Clear', ...distinctData.filter((item): item is OrderDetail & { ShipCountry: string } => !!item.ShipCountry).map((item) => item.ShipCountry)];
        return (
            <div>
                <DropDownList dataSource={shipCountryDistinctData} fields={{ text: (args.column as ColumnProps).field as string, value: (args.column as ColumnProps).field as string }} onChange={handleDropDownFiltering}></DropDownList>
            </div>
        )
    }, []);

    // Handles filtering logic for the ShipCountry column.
    const handleDropDownFiltering = (event: ChangeEventArgs | undefined) => {
        if (event?.value && event.value != "Clear") {
            gridRef.current?.filterByColumn('ShipCountry', 'equal', event.value as string);
        } else if (event?.value === "Clear") {
            gridRef.current?.clearFilter();
        }
    }

    // Returns a numeric textbox filter template for the Freight column.
    const freightFilterTemplate = useCallback(() => {
        return (
            <div className="component-section">
                <NumericTextBox format="C2" onKeyUp={handleNumericFiltering} />
            </div>
        );
    }, []);

    // Handles filtering logic for the Freight column.
    const handleNumericFiltering = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            const value = (e.target as HTMLInputElement).value;
            if (value) {
                gridRef.current?.filterByColumn('Freight', 'equal', value);
            } else {
                gridRef.current?.clearFilter();
            }
        }
    }

    // Returns a date picker filter template for the OrderDate column.
    const orderDateFilterTemplate = useCallback(() => {
        return (
            <div className="component-section">
                <DatePicker onKeyUp={handleDateFiltering} />
            </div>
        );
    }, []);

    // Handles filtering logic for the OrderDate column.
    const handleDateFiltering = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            const value = (e.target as HTMLInputElement).value;
            if (value) {
                gridRef.current?.filterByColumn('OrderDate', 'equal', value);
            } else {
                gridRef.current?.clearFilter();
            }
        }
    }

    return (
        <div>
            {
                useMemo(() => (
                    <Grid ref={gridRef} dataSource={orderDetails} filterSettings={filterSettings} pageSettings={pageSettings} >
                        <Columns>
                            <Column field='OrderID' headerText='Order ID' width='90' textAlign={TextAlign.Right} isPrimaryKey={true} filter={{filterBarType: FilterBarType.NumericTextBox}} />
                            <Column field='CustomerID' headerText='Customer ID' width='100' />
                            <Column field='OrderDate' headerText='Order Date' width='160' format='M/d/yyyy' textAlign={TextAlign.Right} filterTemplate={orderDateFilterTemplate} />
                            <Column field='ShipAddress' headerText='Ship Address' width='150'/>
                            <Column field='ShipCountry' headerText='Ship Country' width='125' filterTemplate={shipCountryFilterTemplate} />
                            <Column field='Freight' headerText='Freight Charges' format='C2' width='130' textAlign={TextAlign.Right} filterTemplate={freightFilterTemplate} />
                        </Columns>
                    </Grid>
                ), [])
            }
        </div>
    )
};
