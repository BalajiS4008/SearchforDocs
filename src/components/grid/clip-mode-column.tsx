import { Grid, Columns, Column, ClipMode } from '@syncfusion/react-grid';
import { productPortfolio } from './productCatalogDetails';

export default function App() {
    return (
        <div>
            <Grid 
                dataSource={productPortfolio} 
                height={350}
            >
                <Columns>
                    <Column field='ProductName' headerText='Product Name' width='150' />
                    <Column field='Category' headerText='Category' width='160' />
                    <Column field='FullDescription' headerText='Product Description' clipMode={ClipMode.EllipsisWithTooltip} width='180' />
                    <Column field='TechnicalSpecifications' headerText='Technical Specifications' width='180' />
                    <Column field='BusinessValue' headerText='Business Value Proposition' width='200' />
                </Columns>
            </Grid>
        </div>
    );
}
