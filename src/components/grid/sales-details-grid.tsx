import { Grid, Columns, Column, ColumnTemplateProps, ClipMode, TextAlign, ColumnType } from '@syncfusion/react-grid';
import { Checkbox, CheckboxChangeEvent } from '@syncfusion/react-buttons';
import './salesData.css'
import { useState, useCallback, useMemo } from 'react';
import { salesDetailsData, SalesDetails } from './salesData';
import { PropertyPane, PropertyColumn, PropertyRow } from '../../common/property-pane';

export default function App() {
    // Renders a progress bar template for the Stock Level column, displaying a percentage.
    const progessTemplate = useCallback((props?: ColumnTemplateProps): string | React.ReactElement => {
        let percentage: number = 0;
        if (props?.data && props.column.field) {
            percentage = (props?.data as SalesDetails).StockLevel as number;
            if (percentage <= 20) {
                percentage = percentage + 30;
            }
        }
        return (
            <div id="myProgress" className="pbar">
                <div id="myBar" className="bar" style={{ width: percentage + "%" }}>
                    <div id="pbarlabel" className="barlabel">{percentage + "%"}</div>
                </div>
            </div>
        );
    }, []);

    // State for HTML encode configuration.
    const [disableHtmlEncode, setDisableHtmlEncode] = useState(false);

    // Updates the HTML encode setting for the Feedback column based on the checkbox value.
    const change = useCallback((args: CheckboxChangeEvent) => {
        setDisableHtmlEncode(args.value);
    }, []);

    return (
        <div>
            <PropertyPane>
                <PropertyColumn>
                    <PropertyRow>
                        <Checkbox onChange={change} label='Enable or disable HTML Encode' />
                    </PropertyRow>
                </PropertyColumn>
            </PropertyPane>
            {useMemo(
                // Memoized Grid component to prevent unnecessary re-renders.
                () => (
                    <Grid dataSource={salesDetailsData} enableHover={false} height={350} className='sales-details'  >
                        <Columns>
                            <Column field="ProductId" headerText="Product ID" width={100} textAlign={TextAlign.Right} />
                            <Column field="Product" headerText="Product" width={100} />
                            <Column field="SupplierName" headerText="Supplier" width={110} />
                            <Column field="ExpiryDate" headerText="Expiry Date" type={ColumnType.Date} textAlign={TextAlign.Right} format="yMd" width={110} />
                            <Column field="UnitPrice" headerText="Unit Price" width={110} textAlign={TextAlign.Right} format="C2" />
                            <Column field="StockLevel" headerText="Stock Level" width={140} template={progessTemplate} />
                            <Column field="Feedback" headerText="<strong>Feedback</strong>" width={200} disableHtmlEncode={disableHtmlEncode} clipMode={ClipMode.EllipsisWithTooltip}/>
                        </Columns>
                    </Grid>
                ),
                [disableHtmlEncode, progessTemplate]
            )}
        </div>
    );
}