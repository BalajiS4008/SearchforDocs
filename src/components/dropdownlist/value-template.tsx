import { ChangeEventArgs, DropDownList } from '@syncfusion/react-dropdowns';
import { useState } from 'react';
import './value-template.css';

interface StockData {
  Symbol: string;
  Name: string;
  Price: number;
  Change: number;
  PercentChange: number;
  Volume: string;
}

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const stockData: { [key: string]: unknown }[] = [
    { 
      Symbol: 'AAPL', 
      Name: 'Apple Inc.', 
      Price: 187.42, 
      Change: 1.75, 
      PercentChange: 0.94,
      Volume: '34.5M'
    },
    { 
      Symbol: 'MSFT', 
      Name: 'Microsoft Corporation', 
      Price: 376.18, 
      Change: 2.43,
      PercentChange: 0.65,
      Volume: '22.1M' 
    },
    { 
      Symbol: 'AMZN', 
      Name: 'Amazon.com Inc.', 
      Price: 178.23, 
      Change: 3.18, 
      PercentChange: 1.82,
      Volume: '15.3M' 
    },
    { 
      Symbol: 'TSLA', 
      Name: 'Tesla, Inc.', 
      Price: 198.54, 
      Change: -5.27, 
      PercentChange: -2.59,
      Volume: '41.2M' 
    }
  ];
  
  const fields = { text: 'Name', value: 'Symbol' };
  const handleChange = (e?: ChangeEventArgs) => {
    setSelectedValue(e?.value as string);
  };  
  const valueTemplate = ({ Symbol, Name, Price }: StockData) => {
    return (
      <div className='stock-value-container'>
        <div className='stock-symbol-tag'>
          {Symbol}
        </div>
        
        <div className='stock-name'>
          {Name}
        </div>
        
        <div className='stock-price-container'>
          <span className='stock-price'>
            ${Price.toFixed(2)}
          </span>
        </div>
      </div>
    );
  };

  const itemTemplate = ({ Symbol, Name, Price }: StockData) => {    
    return (
      <div className='stock-item-container'>
        <div className='stock-item-left'>
          <div className='stock-item-header'>
            <div className='stock-item-symbol'>
              {Symbol}
            </div>
            <div className='stock-item-name'>
              {Name}
            </div>
          </div>
          
          <div className='stock-item-info'>
          </div>
        </div>
        
        <div className='stock-item-right'>
          <div className='stock-item-price'>
            ${Price.toFixed(2)}
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="component-section ddlValuetemplate">      
      <DropDownList 
        dataSource={stockData as { [key: string]: object }[]} 
        fields={fields} 
        valueTemplate={valueTemplate}
        itemTemplate={itemTemplate}
        placeholder="Select a stock"
        value={selectedValue}
        onChange={handleChange}
        popupHeight="270px"
      />
    </div>
  );
}