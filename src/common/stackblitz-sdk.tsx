import sdk from '@stackblitz/sdk';

export const loadStackBlitzProject = async (path: string) => {
    try {
        const stackPath = path.replace(/\.tsx$/, '_stack.json');
        const response = await fetch(`${location.origin}/source/${stackPath}`);

        if (!response.ok) {
            throw new Error(`Failed to load StackBlitz project: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();

        // Extract dependencies and files from the JSON
        const dependencies = JSON.parse(jsonData.dependencies || '{}');

        // Prepare files object
        const files: { [key: string]: string } = {
            'index.html': `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React + Vite</title>
  <style>
    #root {
      margin-top: 150px;
    }
  </style>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
      `,
            'vite.config.ts': `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
});
      `,
            'tsconfig.json': `
{
    "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true
    }
}
      `,
            'package.json': `
{
  "name": "syncfusion-react-sample",
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    ${Object.entries(dependencies).map(([pkg, version
      ]) => `"${pkg}": "${version}"`).join(',\n    ')
    }
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.2.0",
    "typescript": "^5.0.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
      `,
            'src/main.tsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from '@syncfusion/react-base';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider ripple={true}>
    <React.StrictMode>
       <App />
    </React.StrictMode>
</Provider>    
);
      `
        };

        // Add all files from the JSON data
        Object.entries(jsonData).forEach(([filePath, content]) => {
            if (filePath !== 'dependencies') {
                files[filePath] = content as string;
            }
        });

        // Open the project in StackBlitz
        sdk.openProject(
            {
                title: 'Syncfusion React Sample',
                description: 'A sample React app with Syncfusion components',
                template: 'node',
                files: files
            },
            {
                openFile: 'src/App.tsx',
            }
        );

        console.log('StackBlitz project opened successfully');
    } catch (error) {
        console.error('Error opening StackBlitz project:', error);
    }
};