import { ColumnProps, Grid, GridRef, SortSettings, TextAlign } from '@syncfusion/react-grid';
import { useRef, useState, useMemo } from 'react';
import { bookCatalog } from './libraryDetails';

export default function App() {
    const gridRef = useRef<GridRef>(null);
    // State to manage sort settings.    
    const [sortSettings] = useState<SortSettings>({enabled: true});
    
    // State to store customized column definitions.
    const [use, setState] = useState<ColumnProps[] | undefined>(undefined);

    // Flag to ensure column customization runs only once.
    const isInitial = useRef(true);

    // Handle initial data load and customize column properties.
    const onDataLoad = () => {
        if (gridRef.current && isInitial.current) {
            const columns = gridRef.current.getColumns(); 
            if (columns) {
                for (const col of columns) {
                    if (col.field === "BookID") {
                        col.headerText = "Book ID";
                        col.textAlign = TextAlign.Right;
                        col.width = "95px";
                    }
                    if (col.field === "Title") {
                        col.width = "170px";
                    }
                    if (col.field === "Author") {
                        col.width = "150px";
                    }
                    if (col.field === "Genre") {
                        col.width = "125px";
                    }
                    if (col.field === 'PublishedYear') {
                        col.headerText = "Published Year";
                        col.width = "140px";
                        col.textAlign = TextAlign.Right;
                    }
                    if (col.field === 'Rating') {
                        col.textAlign = TextAlign.Right;
                        col.width = "85px";
                    }
                }
            }
            isInitial.current = false;
            setState(columns || []);
        }
    };

    return (
        <div>
            {useMemo(
                // Memoize the Grid component to avoid unnecessary re-renders.
                () => (
                    <Grid dataSource={bookCatalog} ref={gridRef} onDataLoad={onDataLoad} columns={use as ColumnProps[]} 
                        sortSettings={sortSettings} height={350} />
                ),
                [use]
            )}
        </div>
    );
}