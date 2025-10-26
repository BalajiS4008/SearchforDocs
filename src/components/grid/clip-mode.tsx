import { Grid, Columns, Column, ClipMode } from '@syncfusion/react-grid';
import { productPortfolio } from './productCatalogDetails';

export default function App() {
    return (
        <div>
            <Grid 
                dataSource={productPortfolio} 
                clipMode={ClipMode.EllipsisWithTooltip}
                height={350}
            >
                <Columns>
                    <Column field='ProductName' headerText='Product Name' width='155' />
                    <Column field='Category' headerText='Category' width='165' />
                    <Column field='FullDescription' headerText='Product Description' width='180' />
                    <Column field='TechnicalSpecifications' headerText='Technical Specifications' width='160' />
                    <Column field='BusinessValue' headerText='Business Value Proposition' width='200' />
                </Columns>
            </Grid>
        </div>
    );
}
