import { Toolbar, ToolbarItem, ToolbarSeparator } from '@syncfusion/react-navigations';
import { Button, Variant, Color } from '@syncfusion/react-buttons';
import { TableInsertRowIcon, DeleteRowIcon, ColumnsIcon, DeleteColumnIcon, MergeCellsIcon, CellIcon, InsertAboveIcon, TrashIcon, FormatPainterIcon } from '@syncfusion/react-icons';
import './App.css';

export default function App() {
    return (
        <div className="component-section toolbar-demo-container">
            <Toolbar scrollStep={100} aria-label="Table editor">
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<TableInsertRowIcon />}>Add Row</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<DeleteRowIcon />}>Delete Row</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<ColumnsIcon />}>Add Column</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<DeleteColumnIcon />}>Delete Column</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<MergeCellsIcon />}>Merge Cells</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<CellIcon />}>Split Cells</Button>
                </ToolbarItem>
                <ToolbarSeparator />
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<InsertAboveIcon />}>Insert</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<TrashIcon />}>Delete</Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button variant={Variant.Standard} color={Color.Secondary} icon={<FormatPainterIcon />}>Format</Button>
                </ToolbarItem>
            </Toolbar>
        </div>
    );
}