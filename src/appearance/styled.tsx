import styled from 'styled-components';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
  const StyledButton = styled(Button)`
    &&.sf-btn {
      background: #75e1ef;
      border-color: #75e1ef;
      color: #000000;
    }
  `;

  return (
    <div className="component-section">
      <StyledButton>Button</StyledButton>
    </div>
  );
};