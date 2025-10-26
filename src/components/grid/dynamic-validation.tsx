
import { Grid, Columns, Column, GridRef, ColumnProps, TextAlign, EditType, ActionType } from '@syncfusion/react-grid';
import { productCategory } from './foodOrders';
import { useRef } from 'react';
import { Query } from '@syncfusion/react-data';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    const editSettings= { allowEdit: true, allowAdd: true, allowDelete: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    const categories = [
        { category: 'Category A' },
        { category: 'Category B' },
        { category: 'Category C' }
    ];

    const values = [
        { value: 50 }, { value: 100 }, { value: 200 }, { value: 300 },
        { value: 400 }, { value: 500 }, { value: 600 }, { value: 800 }
    ];

    // Validates the Value field based on the selected Category.
    const valueValidation = (args: Record<string, number>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formObj = (gridRef.current as any).editModule?.formObj.element['ej2_instances'][0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const category = (window as any).currentCategory;
        let valid = false;
        let message = '';

        switch (category) {
            case 'Category A':
                valid = args.value >= 100 && args.value <= 500;
                message = 'Value for Category A must be between 100 and 500.';
                break;
            case 'Category B':
                valid = args.value >= 200 && args.value <= 800;
                message = 'Value for Category B must be between 200 and 800.';
                break;
            case 'Category C':
                valid = args.value >= 50 && args.value <= 300;
                message = 'Value for Category C must be between 50 and 300.';
                break;
        }

        formObj.rules['Value']['required'][1] = message;
        return valid;
    };

    // Handles category dropdown change and updates validation message.
    const categoryChange = (args: Record<string, number>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).currentCategory = args.value;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formObj = (gridRef.current as any).editModule?.formObj?.element['ej2_instances'][0];
        formObj.rules['Value']['required'][1] = `Enter a valid value for ${args.value}.`;
    };

    // Initializes grid and sets up validation rules for Value column.
    const created = () => {
        const column: ColumnProps | undefined = gridRef.current?.getColumnByField('Value') as ColumnProps;
        column.validationRules = {
            required: [valueValidation, 'Enter a valid value.'] as unknown as boolean |undefined
        };
    };

    // Sets current category when editing or adding a row.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onRowEditStart = (args: any) => {
        if (args.action === ActionType.BeginEdit || args.action === ActionType.Add) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).currentCategory = args.data?.Category || 'Category A';
        }
    };

    const categoryParams: object = {
        type: EditType.DropDownList,
        params: {
            allowFiltering: true,
            dataSource: categories,
            fields: { value: 'category', text: 'category' },
            query: new Query(),
            onChange: categoryChange
        }
    };

    const valueParams: object = {
        type: EditType.NumericTextBox,
        params: {
            allowFiltering: true,
            dataSource: values,
            fields: { value: 'value', text: 'value' },
            query: new Query()
        }
    };

 
 return (
   <Grid ref={gridRef} dataSource={productCategory} editSettings={editSettings}
    toolbar={toolbarOptions} onGridInit={created} onRowEditStart={onRowEditStart} pageSettings={{enabled: true, pageSize: 8}}>
     <Columns>
       <Column field='ProductID' headerText='Product ID' width='120' textAlign={TextAlign.Right} isPrimaryKey={true} />
       <Column field='Category' headerText='Category' width='160' edit={categoryParams} />
       <Column field='Value' headerText='Value' width='160' edit={valueParams} />
       <Column field='Description' headerText='Description' width='160' />
     </Columns>
   </Grid>
 );
}
