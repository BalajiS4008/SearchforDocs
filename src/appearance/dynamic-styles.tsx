import styled from 'styled-components';
import { css } from 'styled-components'
import { Button } from '@syncfusion/react-buttons';

function App() {
 const StyledButton = styled(Button)`
 &&.sf-btn {
  ${props => props.disabled && css`
    background: #AE043D;
    color: white;
  `}
  }
`;
  return (
  <div className='component-section'>
    <StyledButton disabled={true}>Button</StyledButton>
  </div>);
}
export default App;