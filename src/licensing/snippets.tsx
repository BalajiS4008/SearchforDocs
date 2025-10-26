import { SnippetItem } from '../common/snippet'

export const registerLicenseSnippet: SnippetItem[] = [
    { title: "main.tsx", code: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { registerLicense } from '@syncfusion/react-base';

// Registering Syncfusion license key
registerLicense('Replace your generated license key here');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
` }
];

export const githubActionsSnippet: SnippetItem[] = [
  { title: "main.tsx", code: `steps:
  - name: Install node modules
    run: npm install

  - name: Activate Syncfusion License
    run: npx syncfusion-license activate
    env:
      SYNCFUSION_LICENSE: \${{ secrets.SYNCFUSION_LICENSE }}
` }
];

export const azurePipelinesSnippet: SnippetItem[] = [
  { title: "main.tsx", code: `pool:
  vmImage: 'windows-latest'

steps:
- script: call npm install
  displayName: 'Install node modules'

- script: call npx syncfusion-license activate
  displayName: 'Activate Syncfusion License'
  env:
    SYNCFUSION_LICENSE: $(SYNCFUSION_LICENSE)
` }
];

export const linuxBuildSnippet: SnippetItem[] = [
  { title: "main.tsx", code: `pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: npm install
    displayName: 'Install node modules'

  - script: npx syncfusion-license activate
    displayName: 'Activate Syncfusion License'
    env:
      SYNCFUSION_LICENSE: $(SYNCFUSION_LICENSE)
` }
];