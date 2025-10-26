import { DropDownList } from '@syncfusion/react-dropdowns';
import './app.css';

export default function App() {
  const filteringData = [
    { text: 'Aeróbics', id: '1' },
    { text: 'Aeróbics en Agua', id: '2' }, 
    { text: 'Aerografía', id: '3' }, 
    { text: 'Aeromodelaje', id: '4' }, 
    { text: 'Águilas', id: '5' }, 
    { text: 'Ajedrez', id: '6' }, 
    { text: 'Ala Delta', id: '7' }, 
    { text: 'Álbumes de Música', id: '8' }, 
    { text: 'Alusivos', id: '9' }, 
    { text: 'Análisis de Escritura a Mano', id: '10' }
  ];

  const fields = { text: 'text', value: 'id' };

  return (
    <div className="component-section dropdownlist-container">
      <DropDownList
        dataSource={filteringData as unknown as { [key: string]: object }[]} 
        fields={fields}
        placeholder="Type 'aero'" 
        filterable={true}
        ignoreAccent={true}
        filterPlaceholder="e.g: aero"
      />
    </div>
  );
}