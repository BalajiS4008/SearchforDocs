/* eslint-disable no-useless-escape */
import { SnippetItem } from '../common/snippet'

export const muiSnippets: SnippetItem[] = [
  { title: "App.tsx", code: `import { Message, Severity } from '@syncfusion/react-notifications';
import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(true);
    const [cssClass, setCssClass] = useState('sf-outline sf-primary sf-success msg-hidden');
    const showClick = () => {
        setVisible(true);
        setCssClass('sf-outline sf-primary sf-success msg-hidden');
    };
    const dismissClick = () => {
        setVisible(false);
        setCssClass('sf-outline sf-primary sf-success');
    };

    const contentTemplate = () => {
        return (
            <div>
                <h1>Merged pull request</h1>
                <p>Pull request #41 merged after a successful build</p>
                <Button id="closeBtn" className="sf-link" onClick={dismissClick}>Dismiss</Button>
            </div>
        );
    };

    return (
        <div className="msg-template-section component-section" style={{ margin: '300px' }}>
            <Button id="showBtn" className={cssClass} onClick={showClick}>Show pull request</Button>
            <Message id="msg_template" visible={visible} severity={Severity.Success}>{contentTemplate()}</Message>
        </div>
    );
}` },
    { title: "App.css", code: `.msg-template-section .MuiButton-root.msg-hidden {
    display: none;
}

.msg-template-section .sf-message h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
}

.msg-template-section .sf-message .sf-msg-icon {
    padding: 0 4px;
    justify-content: flex-start;
    text-align: left;
}

.msg-template-section .sf-message p {
    margin: 8px 0 4px;
}

.msg-template-section .sf-message .MuiButton-root {
    padding: 0;
}

.msg-template-section .MuiButton-root.sf-link {
    background: transparent;
    border-color: transparent;
    border-radius: 0;
    box-shadow: none;
    color: rgba(var(--sf-color-info));
}` }
];

export const reduxLoginFormSnippet: SnippetItem[] = [
  { title: "LoginForm.tsx", code: `import { reduxForm } from "redux-form";

interface LoginFormsProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForms = (props: LoginFormsProps) => {
    return (
        <form />
    );
};` }
];

export const loginFormSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import './App.css';
import LoginForm from "./LoginForm";
 
function App() {
  return (
    <div className="App">
      <div className="login-form">
        <h2>Redux form</h2>
        <LoginForm />
      </div>
    </div>
  );
}
export default App;` },
  { title: "App.css", code: `.login-form {
  margin: 0 auto;
  width: 300px;
}

.login-form .sf-btn {
  margin: 10px 0;
}

.error {
  color: red;
}` }
];

export const reduxStoreSnippet: SnippetItem[] = [
  { title: "main.tsx", code: `import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
 
const store = configureStore({
  reducer: {
    form: formReducer
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)` }
];

export const connectReduxFormSnippet: SnippetItem[] = [
  { title: "LoginForm.tsx", code: `export const LoginForm = reduxForm({
    form: "login"
})(LoginForms);` }
];

export const fieldComponentSnippet: SnippetItem[] = [
  { title: "LoginForm.tsx", code: `import { reduxForm, Field } from "redux-form";
import { TextBox, TextBoxChangeEvent } from "@syncfusion/react-inputs";
import { Button } from "@syncfusion/react-buttons";

interface TextBoxComponentProps {
  placeholder: string;
  labelMode: string;
  input: {
    name: string;
    value: string;
    onChange: (event: TextBoxChangeEvent) => void;
  };
  meta: {
    touched: boolean;
    error?: string;
  };
}
 
const textBox: React.FC<TextBoxComponentProps> = ({ placeholder }) => {
    return <TextBox placeholder={placeholder} labelMode="Auto" />
};

const LoginForms = (props: LoginFormsProps) => {
    return (
        <form>
            <Field name="username" component={textBox} placeholder="Enter the user name" />
            <Field name="password" component={textBox} placeholder="Enter the password" />
            <Button type="submit">Submit</Button>
        </form>
    );
};
 
export const LoginForm = reduxForm({
    form: "login"
})(LoginForms);` }
];

export const handlerSnippets: SnippetItem[] = [
    { title: "App.tsx", code: `interface LoginFormValues {
  username: string;
  password: string;
}

function App() {
  const handleLogin = (values: LoginFormValues) => {
    alert(\`User name: \${values.username}\\nPassword: \${values.password}\`);
  }
  return (
    <div className="App">
      <div className="login-form">
        <h2>Redux form</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
export default App;` },
    { title: "LoginForm.tsx", code: `const LoginForms = (props: LoginFormsProps) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            …
        </form>
    );
};`  }
];

export const formValidationSnippet: SnippetItem[] = [
  { title: "LoginForm.tsx", code: `interface LoginFormValues {
  username: string;
  password: string;
}
const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
}

export const LoginForm = reduxForm({
    form: "login",
    validate
})(LoginForms);` }
];

export const displayErrorSnippet: SnippetItem[] = [
  { title: "LoginForm.tsx", code: `const textBox: React.FC<TextBoxComponentProps> = ({ placeholder, input, meta: { touched, error } }) => {
    return <div>
        <TextBox placeholder={placeholder} labelMode="Auto" {...input}
            onChange={(e) => {
                input.onChange(e);
            }}
        />
        {touched && error && <span className="error">{error}</span>}
    </div>
};` }
];

export const textboxSliceSnippet: SnippetItem[] = [
  { title: "textboxSlice.tsx", code: `import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TextBoxState {
  value: string;
}

const initialState: TextBoxState = {
  value: 'Syncfusion',
};

const textBoxSlice = createSlice({
  name: 'textBox',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = textBoxSlice.actions;
export default textBoxSlice.reducer;` }
];

export const reduxStore: SnippetItem[] = [
  { title: "store.tsx", code: `import { configureStore } from '@reduxjs/toolkit';
import textBoxReducer from './textboxSlice';

export const store = configureStore({
  reducer: {
    textBox: textBoxReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;` }
];

export const reduxStoreMain: SnippetItem[] = [
  { title: "main.tsx", code: `import { Provider } from 'react-redux';
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);` }
];

export const textboxSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import { TextBox } from '@syncfusion/react-inputs';
import './App.css';

function App() {

  return (
    <div className='redux-store' style={{ width: '250px' }}>
      <h3>Redux Store</h3>
      <TextBox
        placeholder="Enter your name"
        labelMode="Auto"
      />
    </div>
  );
};

export default App;` }
];

export const connectTextbox: SnippetItem[] = [
  { title: "App.tsx", code: `import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { setValue } from './textboxSlice';
import './App.css';

function App() {
  const value = useSelector((state: RootState) => state.textBox.value);
  const dispatch = useDispatch();

  const handleChange = (args: TextBoxChangeEvent) => {
    dispatch(setValue(args.value as string));
  };

  return (
    <div className='redux-store' style={{ width: '250px' }}>
      <h3>Redux Store</h3>
      <TextBox
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
        labelMode="Auto"
      />
      <p>Redux Value: <strong>{value}</strong></p>
    </div>
  );
};

export default App;` }
];

export const reduxUndoSlice: SnippetItem[] = [
    { title: "textboxSlice.tsx", code: `import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

export interface TextBoxState {
  name: string;
}

const initialState: TextBoxState = {
  name: 'Syncfusion',
};

const textBoxSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = textBoxSlice.actions;
export const undoableFormReducer = undoable(textBoxSlice.reducer); // wrap with undoable`
}];

export const reduxUndoStore: SnippetItem[] = [
  { title: "store.tsx", code: `import { configureStore } from '@reduxjs/toolkit';
import { undoableFormReducer } from './textboxSlice';

export const store = configureStore({
  reducer: {
    form: undoableFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;` }
];

export const reduxUndoMain: SnippetItem[] = [
  { title: "main.tsx", code: `import { Provider } from 'react-redux';
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);` }
];

export const reduxUndoTextbox: SnippetItem[] = [
  { title: "App.tsx", code: `import { TextBox } from '@syncfusion/react-inputs';
import './App.css';

function App() {

  return (
    <div className='redux-undo' style={{ width: '300px',padding: '2rem' }}>
      <h3>Redux Undo</h3>
      <TextBox
        placeholder="Type something"
        labelMode="Auto"
      />
    </div>
  );
};

export default App;` }
];

export const reduxUndoSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { Button } from '@syncfusion/react-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './textboxSlice';
import type { RootState } from './store';
import { ActionCreators } from 'redux-undo';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.form.present.name);

  const handleChange = (args: TextBoxChangeEvent) => {
    dispatch(setName(args.value as string));
  };

  const handleUndo = () => dispatch(ActionCreators.undo());
  const handleRedo = () => dispatch(ActionCreators.redo());

  return (
    <div className='redux-undo' style={{ width: '300px',padding: '2rem' }}>
      <h2>Redux Undo</h2>
      <TextBox
        value={name}
        onChange={handleChange}
        placeholder="Type something"
        labelMode="Auto"
      />
      <div style={{ marginTop: '1rem' }}>
        <Button onClick={handleUndo} style={{ marginRight: '0.5rem' }}>Undo</Button>
        <Button onClick={handleRedo}>Redo</Button>
      </div>
    </div>
  );
};

export default App;` }
];

export const messageStyles: SnippetItem[] = [
  { title: "custom.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const dotnetSnippet: SnippetItem[] = [
  { title: "MessageComponent.js", code: `import { Message, Severity } from '@syncfusion/react-notifications';

export function MessageComponent() {
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <h3>React Message</h3>
        <Message severity={Severity.Success} closeIcon={true}>
            Your message has been sent successfully
        </Message>
    </div>
  );
}` }
];

export const dotnetRoutes: SnippetItem[] = [
  { title: "AppRoutes.js", code: `import { MessageComponent } from './components/MessageComponent';

// add your routes in AppRoutes
const AppRoutes = [
  ...
  {
    path: '/react',
    element: <MessageComponent />
  }
];` }
];

export const dotnetNavMenu: SnippetItem[] = [
  { title: "NavMenu.js:", code: `<NavItem>
    <NavLink tag={Link} className="text-dark" to="/react">React</NavLink>
</NavItem>` }
];

export const finalFormSetup: SnippetItem[] = [
     { title: "CMD", code: `npm install @syncfusion/react-inputs @syncfusion/react-buttons react-final-form`}
]

export const finalFormStyles: SnippetItem[] = [
     { title: "App.css", code: `/* Import Syncfusion styles */
@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/react-inputs/styles/material3.css';

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.form-header {
  background: rgba(103, 80, 164);
  color: white;
  padding: 5px;
  text-align: center;
}

.form-header h1 {
  margin: 0 0 10px 0;
  font-size: 2rem;
}

.form-container {
  padding: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 30px;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 5px;
}

.checkbox-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.checkbox-field {
  margin-bottom: 15px;
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.form-debug {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}

.form-debug h3 {
  margin: 0 0 15px 0;
  color: #475569;
}

.debug-output {
  background: #1e293b;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 6px;
  font-size: 0.875rem;
  overflow-x: auto;
  margin: 0;
}`}
]

export const finalFormSample: SnippetItem[] = [
     { title: "App.tsx", code: `import { Form, Field } from "react-final-form";
import { TextBox, TextBoxChangeEvent } from '@syncfusion/react-inputs';
import { NumericTextBox, NumericChangeEvent } from '@syncfusion/react-inputs';
import { Checkbox, Button,CheckboxChangeEvent  } from '@syncfusion/react-buttons';
import { registerLicense, Provider } from '@syncfusion/react-base';
import './App.css';

// Register Syncfusion license (replace with your license key)
registerLicense('YOUR_LICENSE_KEY');

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
};

export default function App() {
  return (
    <Provider ripple={true}>
      <div className="form-wrapper">
        <div className="form-header">
          <h2>React Final Form with Syncfusion<sup>®</sup> React Components</h2>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={(values: any) => {
            const errors: any = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            if (!values.age || values.age <= 18) {
              errors.age = "Age is required and must be greater than 18";
            }
            if (!values.agreeToTerms) {
              errors.agreeToTerms = "You must agree to the terms";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-grid">
                <Field name="username">
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Username *</label>
                      <TextBox
                        placeholder="Enter username"
                        value={input.value || ''}
                        onChange={(e: TextBoxChangeEvent) => input.onChange(e.value)}
                      />
                      {meta.error && meta.touched && (
                        <span className="error-message">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <Field name="age">
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Age *</label>
                      <NumericTextBox
                        placeholder="Enter your age"
                        value={input.value ? Number(input.value) : null}
                        onChange={(e: NumericChangeEvent) => {
                          if (e) {
                            input.onChange(e.value);
                          }
                        }}
                        min={1}
                        max={120}
                        format="n0"
                      />
                      {meta.error && meta.touched && (
                        <span className="error-message">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Password *</label>
                      <TextBox
                        type="password"
                        placeholder="Enter password"
                        value={input.value || ''}
                        onChange={(e: TextBoxChangeEvent) => input.onChange(e.value)}
                      />
                      {meta.error && meta.touched && (
                        <span className="error-message">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>

                <Field name="confirm">
                  {({ input, meta }) => (
                    <div className="form-field">
                      <label className="form-label">Confirm Password *</label>
                      <TextBox
                        type="password"
                        placeholder="Confirm password"
                        value={input.value || ''}
                        onChange={(e: TextBoxChangeEvent) => input.onChange(e.value)}
                      />
                      {meta.error && meta.touched && (
                        <span className="error-message">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className="checkbox-section">
                <Field name="rememberMe" type="checkbox">
                  {({ input }) => (
                    <div className="checkbox-field">
                      <Checkbox
                        label="Remember Me"
                        checked={input.checked || false}
                        onChange={(e: CheckboxChangeEvent) => input.onChange(e.value)}
                      />
                    </div>
                  )}
                </Field>

                <Field name="agreeToTerms" type="checkbox">
                  {({ input, meta }) => (
                    <div className="checkbox-field">
                      <Checkbox
                        label="I agree to the terms and conditions *"
                        checked={input.checked || false}
                        onChange={(e: CheckboxChangeEvent) => input.onChange(e.value)}
                      />
                      {meta.error && meta.touched && (
                        <span className="error-message">
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>

              <div className="form-actions">
                <Button
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </Button>
                <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </div>

              <div className="form-debug">
                <h3>Form Values:</h3>
                <pre className="debug-output">
                  {JSON.stringify(values, null, 2)}
                </pre>
              </div>
            </form>
          )}
        />
      </div>
    </Provider>
  );
}`}
]

export const ssrReactSetUP: SnippetItem[] = [
     { title: "CMD", code: `npx create-react-app my-syncfusion-ssr-app
cd my-syncfusion-ssr-app`}
]

export const ssrAdditionals: SnippetItem[] = [
     { title: "CMD", code: `npm install @babel/register @babel/preset-env @babel/preset-react express ignore-styles --save`}
]

export const ssrServerRoot: SnippetItem[] = [
     {title:"server/root.js", code:`require('ignore-styles');

require('@babel/register')({
  ignore: [/node_modules\\/(?!@syncfusion)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');`}
]

export const getPageDetails: any=[
   {title:"server/server.js", code:`const express = require('express');

const fs = require('fs');
const path = require('path');
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');

const SRC_DIR = process.argv[2] || './src/docs';
const OUT_FILE = process.argv[3] || './public/search-index.json';
   function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  for (const name of list) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else if (path.extname(name).toLowerCase() === '.mdx') {
      results.push(full);
    }
  }
  return results;
}

function textFromNode(node) {
  if (!node) return '';
  if (node.type === 'text' || node.type === 'inlineCode') return node.value || '';
  if (Array.isArray(node.children)) return node.children.map(textFromNode).join('');
  return '';
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

function buildUrlForFile(srcDir, filePath) {
  const rel = path.relative(srcDir, filePath).replace(/\\/g, '/');
  return '/' + rel.replace(/\.mdx$/, '.html');
}

function extractHeadingsFromContent(content) {
  const processor = unified().use(remarkParse).use(remarkMdx);
  const tree = processor.parse(content);

  const headings = [];
  function visit(node) {
    if (!node) return;
    if (node.type === 'heading' && (node.depth === 2 || node.depth === 3)) {
      const txt = textFromNode(node).trim();
      if (txt) {
        headings.push({ heading: txt, level: node.depth });
      }
    }
    if (node.children && node.children.length) {
      node.children.forEach(visit);
    }
  }
  visit(tree);
  return headings;
}
(async function main() {
  try {
    const files = walk(SRC_DIR);
    const index = [];
    let id = 0;

    for (const f of files) {
      const content = fs.readFileSync(f, 'utf8');
      const headings = extractHeadingsFromContent(content);
      const url = buildUrlForFile(SRC_DIR, f);

      for (const h of headings) {
        index.push({
          id: id++,
          page: path.basename(f, path.extname(f)),
          path: url,
          heading: h.heading,
          level: h.level,
          hash: slugify(h.heading)
        });
      }
    }

    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(index, null, 2), 'utf8');
    console.log('✅ Built search index with headings from MDX files.');
  } catch (err) {
    console.error('❌ Error building search index:', err);
    process.exit(1);
  }
})();
`
}
]

export const ssrServer: SnippetItem[] = [
     {title:"server/server.js", code:`const express = require('express');
const fs = require('fs');
const path = require('path')
const React = require('react');
const { renderToPipeableStream } = require('react-dom/server');
const App = require('../src/App').default;
const PORT = 4000;
const app = express();

app.use('^/$', (request, response) => {
  const filePath = path.resolve('./build/index.html');
  
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return response.status(500).send('There was an error');
    }

    const [beforeRoot, afterRoot] = data.split('<div id="root"></div>');
    
    response.write(beforeRoot);
    response.write('<div id="root">');
    
    const { pipe } = renderToPipeableStream(<App />, {
      bootstrapScripts: ['/static/js/main.js'],
      onShellReady() {
        pipe(response);
      },
      onAllReady() {
        response.write('</div>');
        response.write(afterRoot);
        response.end();
      },
      onError(error) {
        console.error(error);
        response.statusCode = 500;
        response.end('Internal Server Error');
      }
    });
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log('App works on Port: 4000');
});`
 }
]

export const ssrIndex: SnippetItem[] = [
     { title: "index.js", code: `import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();`}
]

export const ssrApp: SnippetItem[] = [
     { title: "App.js", code: `import React from 'react';
import { Color, Fab, FabPosition } from '@syncfusion/react-buttons';

import '@syncfusion/react-base/styles/material3.css';
import '@syncfusion/react-buttons/styles/material3.css';

export default function App() {
    return (
        <div className='component-section flex-wrap sf-align-center gap-30 heigth-50'>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Info} position={FabPosition.MiddleCenter} >Info</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Warning} position={FabPosition.MiddleCenter} >Warning</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Error} position={FabPosition.MiddleCenter} >Error</Fab>
            </div>
            <div className='sf-pos-relative min-width-100 heigth-50'>
                <Fab color={Color.Success} position={FabPosition.MiddleCenter} >Success</Fab>
            </div>
        </div>
    );
}
`}
]

export const ssrJson: SnippetItem[] = [
     { title: "package.json", code: `{
  "scripts": {
    "serve": "node server/root.js"
  }
}`}
]

export const ssrBuild: SnippetItem[] = [
     { title: "CMD", code: `npm run build`}
]

export const ssrServe: SnippetItem[] = [
     { title: "CMD", code: `npm run serve`}
]
