import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './footer-template.css';
import './app.css';

interface Product {
  Id: string;
  Name: string;
  Price: number;
  Stock: number;
  [key: string]: string | number | object;
}

export default function App() {
  const productsData: Product[] = [
    { Id: 'PRD001', Name: 'iPhone 14 Pro', Price: 999, Stock: 45 },
    { Id: 'PRD002', Name: 'Samsung Galaxy S23', Price: 799, Stock: 32 },
    { Id: 'PRD003', Name: 'MacBook Air M2', Price: 1199, Stock: 18 },
    { Id: 'PRD004', Name: 'Dell XPS 15', Price: 1499, Stock: 7 },
    { Id: 'PRD005', Name: 'Sony WH-1000XM5', Price: 349, Stock: 0 },
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const fields = { text: 'Name', value: 'Id' };
  const formatPrice = (price: number) => `$${price}`;
  const inStockCount = productsData.filter(item => item.Stock > 0).length;
  const outOfStockCount = productsData.length - inStockCount;
  const footerTemplate = () => (
    <div className='divider-box'>
      <div className='flex-between-row'>
        <span>In stock: <b className='ddl-footer-instock'>{inStockCount}</b></span>
        <span>Out of stock: <b className='ddl-footer-outstock'>{outOfStockCount}</b></span>
      </div>
    </div>
  );

  const handleChange = (e?: ChangeEventArgs) => {
    setSelectedId(e?.value as string);
  };
  const selectedProduct = productsData.find(p => p.Id === selectedId);
  return (
    <div className='component-section dropdownlist-container'>      
      <DropDownList
        id="productDropdown"
        dataSource={productsData as unknown as { [key: string]: object }[]}
        fields={fields} 
        footerTemplate={footerTemplate()}
        placeholder="Select a product" 
        value={selectedId}
        onChange={handleChange}
        popupHeight="220px"
      />
      
      {selectedProduct && (
        <div className='custom-box'>
          <h3 className='ddl-section-heading'>
            {String(selectedProduct.Name)}
          </h3>
          
          <div className='ddl-space-between-container'>
            <span className='ddl-medium-text'>
              Price: {formatPrice(selectedProduct.Price as number)}
            </span>
            
            <span className={[
                'ddl-stock-status',
                selectedProduct.Stock ? 'ddl-stock-status--in' : 'ddl-stock-status--out',
              ].join(' ')}>
              {selectedProduct.Stock ? `In Stock (${selectedProduct.Stock})` : 'Out of Stock'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}