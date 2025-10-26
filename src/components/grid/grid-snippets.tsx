import { SnippetItem } from '../../common/snippet'

export const gridNpm: SnippetItem[] = [
  { title: "NPM", code: 'npm install @syncfusion/react-grid' }
];

export const gridImport: SnippetItem[] = [
  { title: "App.tsx", code: 'import { Grid } from "@syncfusion/react-grid";' }
];

export const gridStyles: SnippetItem[] = [
  {
    title: "App.css", code: `@import "../node_modules/@syncfusion/react-base/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-inputs/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-buttons/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-dropdowns/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-calendars/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-navigations/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-popups/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-pager/styles/material3.css"; 
@import "../node_modules/@syncfusion/react-grid/styles/material3.css";` }
];

export const gridDependency: SnippetItem[] = [
  {
    title: "Packages", code: `|-- @syncfusion/react-grid
   |-- @syncfusion/react-base` }
];

export const gridDataSource: SnippetItem[] = [
  {
    title: "App.tsx", code: `import { employeeInformation } from './employeeInformation';
export default function App() {
    return (
        <Grid dataSource={employeeInformation} />
    );
};`
  }
];

export const gridDefineColumns: SnippetItem[] = [
  {
    title: "App.tsx", code: `<Grid dataSource={employeeInformation}>
      <Columns>
         <Column field="EmployeeID" headerText="Employee ID" />
         <Column field="Name" headerText="Name" />
         <Column field='Designation' headerText='Designation' />
         <Column field="Department" headerText="Department" />
         <Column field="ReportingPerson" headerText="Reports To" />
         <Column field="Location" headerText="Location" />
      </Columns>
  </Grid>` }
]

export const gridFeatures: SnippetItem[] = [
  {
    title: "App.tsx", code: `<Grid dataSource={employeeInformation} pageSettings={{ enabled: true }} filterSettings={{ enabled: true }} 
    sortSettings={{ enabled: true }} searchSettings={{ enabled: true }} toolbar={['Search']} />` }
]

export const gridlocaluseEffectSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `import { useEffect, useState } from 'react';
import { Grid, Column, Columns } from '@syncfusion/react-grid';

export default function App() {
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    const processedData = [
      { EmployeeID: 10248, Name: 'Paul Henriot' },
      { EmployeeID: 10249, Name: 'Karin Josephs' }
    ];
    setGridData(processedData);
  }, []);
  return (
    <div>
      <Grid dataSource={gridData}></Grid>
    </div>
  );
};` }
]

export const gridlocalJSONSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `import { Grid, Column, Columns } from '@syncfusion/react-grid';
import { employeeDetails } from './employeeDetails'; // JSON array of objects.

export default function App() {
    return (
        <div>
            <Grid dataSource={employeeDetails}></Grid>
        </div>
    );
};` }
]

export const gridlocalreactStateSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `import { useState } from 'react';
import { Grid, Column, Columns } from '@syncfusion/react-grid';

export default function App() {

    const [gridData, setGridData] = useState([
        { EmployeeID: 10248, Name: 'Paul Henriot', Department: 'Engineering' },
        { EmployeeID: 10249, Name: 'Karin Josephs', Department: 'Support' }
    ]);

    return (
        <div>
            <Grid dataSource={gridData}></Grid>
        </div>
    );
};` }
]

export const gridCustomFilterSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `function buildFilterQuery(state: DataState): string {
if (state.where?.length) {
  return (
    '&$filter=' + state.where[0].predicates.map((filter) => filter.columns
          .map((col) => { const value = typeof col.value === 'string' ? "'" + col.value + "'" : col.value;
            if (col.operator === 'startswith') {
              return ('startswith(tolower(' + col.field +'), ' + (typeof col.value === 'string' ? "'" + col.value.toLowerCase() + "'" : col.value) +')');
            } else if (col.operator === 'equal') {
              return col.field + ' eq ' + value;
            } else if (col.operator === 'contains') {
              return ( 'contains(tolower(' + col.field + '), ' + (typeof col.value === 'string' ? "'" + col.value.toLowerCase() + "'" : col.value) + ')');
            }
            return '';
          })
        .join(' and ')
      )
      .join(' and ')
    );
  }
  return '';
}`
  }
]

export const gridCustomPagingSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `function buildPageQuery(state: DataState): string {
    return \`$skip=\${state.skip}&$top=\${state.take}\`;
}`
  }
]

export const gridCustomSortingSnippet: SnippetItem[] = [
  {
    title: "App.tsx",
    code: `function buildSortQuery(state: DataState): string {
  if (state.sort?.length) {
    return (
      '&$orderby=' + state.sort
        .map((obj) => (obj.direction === SortDirection.Descending ? obj.field + ' desc' : obj.field))
        .reverse()
        .join(',')
    );
  }
  return '';
}`
  }
]

export const gridComplexBindingSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `<Column field='Name.FirstName' headerText='First Name' width='70' />
<Column field='Name.LastName' headerText='Last Name' width='70' />` 
  }
]

export const gridRemoteDataMangerSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `const data = new DataManager({
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/'
});
const query = new Query().expand('Customer');

...

<Column field='Customer.CustomerID' headerText='Customer ID' width='100' />`
  }
]

export const gridComplexNextedColumnSnippet: SnippetItem[] = [
  {
    title: "App.tsx", code: `<Column field="Customer.Details.Name" headerText="Customer Name" width="110" />
<Column field="Customer.Details.Address.City" headerText=" Ship City" width="90" />
<Column field="Customer.Details.Address.Country" headerText="Ship Country" width="100" />` 
  }
];
