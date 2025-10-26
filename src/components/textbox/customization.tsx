import { TextBox, Variant } from "@syncfusion/react-inputs";
import styled from 'styled-components';

export default function App() {
  const StyledTextBox = styled(TextBox)`
    &.sf-input-group.sf-control-wrapper[class] {
    border-radius: 50px !important;
    }

    .dark-theme.sf-dark-mode &.sf-input-group.sf-control-wrapper.sf-input-focus[class] {
    color: rgba(202, 220, 239);
    }

        &.sf-input-group.sf-control-wrapper.sf-input-focus[class] {
        color: rgba(11, 47, 86);
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25) !important;
    }
  `;

  return (
    <div className="component-section" style={{ width: '250px' }}>
      <StyledTextBox variant={Variant.Outlined} defaultValue={'John Kennedy'}></StyledTextBox>
    </div>
  );
};