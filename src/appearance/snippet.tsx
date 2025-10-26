import { SnippetItem } from '../common/snippet'

export const iconSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import { DownloadIcon, SaveIcon, EditIcon, SearchIcon } from '@syncfusion/react-icons';
import './icon-style.css';

export default function App() {
  return (
    <div className="syncfusion-icons">
      <div className="icon-grid">
        <div className="icon-item"><DownloadIcon className='sf-font-size-2xl'/>
          <p>Download</p>
        </div>
        <div className="icon-item"><SaveIcon className='sf-font-size-2xl'/>
          <p>Save</p>
        </div>
        <div className="icon-item"><EditIcon className='sf-font-size-2xl'/>
          <p>Edit</p>
        </div>
        <div className="icon-item"><SearchIcon className='sf-font-size-2xl'/>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}` }
];

export const styledSnippet: SnippetItem[] = [
  { 
    title: "App.tsx", code: `const StyledButton = styled(Button)\`
  &&.sf-btn {
      background: #75e1ef;
      border-color: #75e1ef;
      color: #000000;
    }
\`;`
  }
];

export const styledButtonSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import { Button } from '@syncfusion/react-buttons';

export default function App() {
  const StyledButton = styled(Button)\`
    &&.sf-btn {
      background: #75e1ef;
      border-color: #75e1ef;
      color: #000000;
    }
  \`;

  return (
    <div className="component-section">
      <StyledButton>Button</StyledButton>
    </div>
  );
};` }
];

export const dynamicStyledSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `const StyledButton = styled(Button)\`
&&.sf-btn {
    \${props => props.disabled && css\`
      background: palevioletred;
      color: white;
    \`}
  }
\`;`
  }
];

export const dynamicButtonSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import { css } from 'styled-components'
import { Button } from '@syncfusion/react-buttons';

function App() {
 const StyledButton = styled(Button)\`
 &&.sf-btn {
  \${props => props.disabled && css\`
    background: palevioletred;
    color: white;
  \`}
  }
\`;
  return (
  <div className='control-pane'>
    <StyledButton disabled={true}>Button</StyledButton>
  </div>);
}
export default App;` }
];

export const material3CSS: SnippetItem[] = [
  { title: "material3.css", code: `/* rgb() values of material3 theme */
:root {
    --sf-color-black: 0, 0, 0;
    --sf-color-white: 255, 255, 255;
    --sf-color-primary: 103, 80, 164;
    --sf-color-primary-container: 234, 221, 255;
    --sf-color-secondary: 98, 91, 113;
    --sf-color-secondary-container: 232, 222, 248;
    --sf-color-tertiary: 125, 82, 96;
    --sf-color-tertiary-container: 255, 216, 228;
    --sf-color-surface: 255, 255, 255;
    --sf-color-surface-variant: 231, 224, 236;
    --sf-color-background: var(--sf-color-surface);
    --sf-color-on-primary: 255, 255, 255;
    --sf-color-on-primary-container: 33, 0, 94;
    --sf-color-on-secondary: 255, 255, 255;
    --sf-color-on-secondary-container: 30, 25, 43;
    --sf-color-on-tertiary: 255, 255, 255;
    ...
  }`
  }
];

export const messageSnippet: SnippetItem[] = [
    { title: "App.tsx", code: `import { Message, Severity } from '@syncfusion/react-notifications';
import './App.css';

export default function App() {
    return (
    <div className="component-section">
        <Message severity={Severity.Success}>Your message has been sent successfully</Message>
    </div>
    );
}` }
];

export const shadowDomSnippet: SnippetItem[] = [
    { title: "main.tsx", code: `import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'

const container = document.querySelector('#root');
const shadowContainer = container?.attachShadow({ mode: 'open' });
const shadowRootElement = document.createElement('div');
shadowContainer?.appendChild(shadowRootElement);

ReactDOM.createRoot(shadowRootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)` }
];

export const messageStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const shadowDomStyles: SnippetItem[] = [
    { title: "main.tsx", code: `import styles from './App.css?raw';

const style = document.createElement('style');
style.innerHTML = styles;
shadowContainer?.appendChild(style);` }
];

export const inlineStyles: SnippetItem[] = [
  { title: "App.tsx", code: `import { Button } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
      <Button style={{ background: 'blue', fontSize: 16 }}>
        Button
      </Button>
  );
};`
  }
];

export const classNameStyles: SnippetItem[] = [
  { title: "App.tsx", code: `import { Button } from '@syncfusion/react-buttons';
import './App.css';

export default function App() {
  return (
      <Button className="button-green">
          Default Button
      </Button>
  );
};`
  }
];

export const themeContext: SnippetItem[] = [
  { title: "themeContext.tsx", code: `import { createContext, useContext, type ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
  value: any;
};
const ThemeContext = createContext({ color: 'black', background: 'white' });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children, value }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}`}
];

export const buttonThemeContext: SnippetItem[] = [
  { title: "App.tsx", code: `import { ThemeProvider, useTheme } from './themeContext';
import { Button } from '@syncfusion/react-buttons';
import './App.css';

function StyledButton() {
  const theme = useTheme();
  return (
    <Button style={{ color: theme.color, background: theme.background }}>
      Themed Button
    </Button>
  );
}

export default function App() {
  const theme = { color: 'white', background: '#1976d2' };
  return (
    <ThemeProvider value={theme}>
      <StyledButton />
    </ThemeProvider>
  );
}`
}
];

export const globalStyles: SnippetItem[] = [
  { title: "App.tsx", code: `import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  body { background: #000000; }
  h1 { color: #1976d2; }
\`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World</h1>
    </>
  );
}`
}
];