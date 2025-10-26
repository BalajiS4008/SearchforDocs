import { Grid, Column, Columns, ColumnTemplateProps, SortSettings, FilterSettings, FilterBarType, ClipMode, TextAlign } from '@syncfusion/react-grid';
import React, { useCallback, useMemo, useState } from 'react';
import { employeeData, Employee } from './employeeDetails';

export default function App() {
    // State to manage sort and filter settings.  
    const [sortSettings] = useState<SortSettings>({enabled: true});
    const [filterSettings] = useState<FilterSettings>({enabled: true});

    // Opens a new tab with the meaning of the given first name.
    const onClick = useCallback((firstName: string) => {
        const url = 'https://www.meaningofthename.com/';
        const searchUrl = url + firstName;
        window.open(searchUrl);
    }, []);

    // Template to render a hyperlink for the first name.
    const hyperLinkTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
        return (
            <div>
                <a href="#" onClick={() => onClick((props?.data as Employee).FirstName)}>
                    {(props?.data as Employee).FirstName}
                </a>
            </div>
        );
    }, [onClick]);

    return useMemo(() => (
        // Memoized Grid component to prevent unnecessary re-renders.
        <Grid dataSource={employeeData} className='hyperlink-grid' filterSettings={filterSettings} sortSettings={sortSettings} >
            <Columns>
                <Column field='EmployeeID' headerText='ID' width='50' filter={{filterBarType:FilterBarType.NumericTextBox}} textAlign={TextAlign.Right} />
                <Column field='FirstName' headerText='First Name' width='60' template={hyperLinkTemplate} />
                <Column field='LastName' headerText='Last Name' width='60' />
                <Column field='Title' headerText='Role' width='90'/>
                <Column field='Address' headerText='Address' width='90' clipMode={ClipMode.EllipsisWithTooltip}/>
                <Column field='Country' headerText='Country' width='80' />
            </Columns>
        </Grid>
    ), [hyperLinkTemplate]);
}
