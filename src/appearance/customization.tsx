import { Button } from '@syncfusion/react-buttons';
import { Provider } from '@syncfusion/react-base';

export default function App() {

return (
    <Provider ripple={true}>
    <div className='component-section'>
      {/* Primary Button - Used to represent a primary action. */}
      <Button className='sf-success'>Button</Button>
    </div>
    </Provider>
  );
};