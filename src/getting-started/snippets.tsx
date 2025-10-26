import { SnippetItem } from '../common/snippet'

export const viteNpm: SnippetItem[] = [
    { title: "npm", code: 'npm create vite@latest' },
    { title: "yarn", code: "yarn create vite"  }
];

export const frameworkSnippet: SnippetItem[] = [
    { title: "CMD", code: `? Select a framework: » - Use arrow-keys. Return to submit.
     Vanilla
     Vue
>   React
     Preact
     Lit
     Svelte
     Others` }
];

export const viteVariant: SnippetItem[] = [
    { title: "CMD", code: `? Select a variant: » - Use arrow-keys. Return to submit.
     JavaScript
>   TypeScript
     JavaScript + SWC
     TypeScript + SWC
` }
]

export const viteNpmInstall: SnippetItem[] = [
    { title: "npm", code: `cd my-project 
npm install` },
    { title: "yarn", code: `cd my-project 
yarn install`  }
];

export const messagePackage: SnippetItem[] = [
    { title: "npm", code: 'npm install @syncfusion/react-notifications --save' },
    { title: "yarn", code: "yarn add @syncfusion/react-notifications"  }
];

export const viteStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const nextJSStyles: SnippetItem[] = [
    { title: "globals.css", code: `@import '../../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];

export const viteMessageSample: SnippetItem[] = [
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

export const runSample: SnippetItem[] = [
    { title: "npm", code: 'npm run dev' },
    { title: "yarn", code: "yarn run dev"  }
];

export const nextNpm: SnippetItem[] = [
    { title: "npm", code: 'npx create-next-app@latest' },
    { title: "yarn", code: "yarn create next-app"  }
];

export const nextPackage: SnippetItem[] = [
    { title: 'CMD', code: '√ What is your project named? » nextjs-demo' }
];

export const nextframeworkSnippet: SnippetItem[] = [
    { title: "CMD", code: `√ What is your project named? ... nextjs-demo
√ Would you like to use 'TypeScript'? ... No / 'Yes'
√ Would you like to use 'ESLint'? ... No / 'Yes'
√ Would you like to use 'Tailwind CSS'? ... 'No' / Yes
√ Would you like to use 'src/' 'directory'? ... No / 'Yes'
√ Would you like to use 'App Router'? (recommended) ... No / 'Yes'
√ Would you like to use 'Turbopack' for 'next dev'? ... 'No' / Yes
√ Would you like to customize the 'import alias'?('@/*' by default)? ... 'No'/ Yes
Creating a new Next.js app in D:\\nextjs-demo.` },
];

export const nextJSMessageSample: SnippetItem[] = [
    { title: "page.tsx", code: `'use client'
import { Message, Severity } from '@syncfusion/react-notifications';

export default function Home() {
  return (
    <div className="component-section">
        <Message severity={Severity.Success}>Your message has been sent successfully</Message>
    </div>
  )
}` }
];

export const esPromise: SnippetItem[] = [
    { title: "npm", code: 'npm install es6-promise' },
    { title: "yarn", code: "yarn add es6-promise"  }
];

export const createRemixApp: SnippetItem[] = [
    { title: "CMD", code: `dir     :  Where should we create your new project?
              quick-start

              ◼  Using basic template See https://remix.run/guides/templates for more
              ✔  Template copied

git     :  Initialize a new git repository?
              No

deps :  Install dependencies with npm?
              Yes` }
];

export const numericTextboxPackage: SnippetItem[] = [
    { title: "npm", code: 'npm install @syncfusion/react-inputs --save' }
];

export const remixAppStyles: SnippetItem[] = [
    { title: "_index.tsx", code: `import '@syncfusion/react-base/styles/material3.css';
import '@syncfusion/react-inputs/styles/material3.css';` }
];

export const remixSSRSnippets: SnippetItem[] = [
    { title: "vite.config.ts", code: `import { defineConfig } from "vite";

export default defineConfig({
  ...
  ssr: {
    noExternal: [/@syncfusion/]
  },
  ...
});` }
];

export const remixNumericTextboxSnippets: SnippetItem[] = [
    { title: "_index.tsx", code: `import '@syncfusion/react-base/styles/material3.css';
import '@syncfusion/react-inputs/styles/material3.css';
import {  NumericTextBox } from "@syncfusion/react-inputs";

export const meta = () => {
  return [{
    title: "Syncfusion Numeric Textbox Remix",
    description: "Syncfusion Numeric Textbox with Remix",
  }];
};

export default function Index() {
  return (
    <div style={{ margin: '15rem'  }}>
        <NumericTextBox
            placeholder="Enter value"
            width={250}
            defaultValue={20}
        />
    </div>
  );
}` }
];

export const sharepointCreation: SnippetItem[] = [
    { title: "CMD", code: `Let's create a new Microsoft 365 solution.
? What is your solution name? my-project
? Which type of client-side component to create? WebPart
Add new Web part to solution my-project.
? What is your Web part name? App
? Which template would you like to use? React` }
];

export const sharepointSnippets: SnippetItem[] = [
    { title: "App.tsx", code: `import * as React from 'react';
import { TextBox } from '@syncfusion/react-inputs';
import './index.scss';

export default function App(): JSX.Element {

  return (
    <div className='component-section' style={{ margin: '5rem' }}>
      <TextBox placeholder="Enter your name" width={250} labelMode="Auto" />
    </div>
  );
}` }
];

export const preactNpm: SnippetItem[] = [
    { title: "npm", code: 'npm init preact' },
    { title: "yarn", code: "yarn init preact"  }
];

export const preactProjectSnippet: SnippetItem[] = [
    { title: "CMD", code: `┌  Preact - Fast 3kB alternative to React with the same modern API
│
◆  Project directory:
│  my-project
└` },
];

export const preactcodePreferenceSnippet: SnippetItem[] = [
    { title: "CMD", code: `┌  Preact - Fast 3kB alternative to React with the same modern API
│
◆  Project language:
│  ○ JavaScript
│  ● TypeScript
└` },
];

export const preactOtherPreferenceSnippet: SnippetItem[] = [
    { title: "CMD", code: `┌  Preact - Fast 3kB alternative to React with the same modern API
│
◆ Use router?
│
│    Yes / > No
│
◆ Prerender app (SSG)?
│
│    Yes / > No
│
◆ Use ESLint?
│
│    Yes / > No
│ 
└` },
];

export const chipPackage: SnippetItem[] = [
    { title: "npm", code: 'npm install @syncfusion/react-buttons --save' },
    { title: "yarn", code: "yarn add @syncfusion/react-buttons"  }
];

export const preactStyles: SnippetItem[] = [
    { title: "style.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];

export const preactChipSample: SnippetItem[] = [
    { title: "index.tsx", code: `import { Chip, ChipProps } from '@syncfusion/react-buttons';
import UserIcon from './user-icon';
import './style.css'
import AnneImage from './images/anne.png';
import { render } from 'preact';

export default function App() {
    const people: ChipProps[] = [
        { text: 'Anne', value: 'Anne', leadingIconUrl: AnneImage },
        { text: 'John', value: 'John', leadingIcon: <UserIcon /> },
        { text: 'David', value: 'David', avatar: <>D</> }
    ];

    return (
        <div className="component-section chip-section">
            {people.map((chip: ChipProps) => (
                <Chip key={chip.value} text={chip.text} value={chip.value} color={chip.color} leadingIconUrl={chip.leadingIconUrl} leadingIcon={chip.leadingIcon} avatar={chip.avatar} />
            ))}
        </div>
    );
}

render(<App />, document.getElementById('app'));` }
];

export const gatsbyNpm: SnippetItem[] = [
    { title: "npm", code: 'npm create gatsby' },
    { title: "yarn", code: "yarn create gatsby"  }
];

export const gatsbyPreferenceSnippet: SnippetItem[] = [
    { title: "CMD", code: `What would you like to call your site?
√ · my-project
What would you like to name the folder where your site will be created?
√ / my-project
√ Will you be using JavaScript or TypeScript?       
· TypeScript
√ Will you be using a CMS?
· No (or I'll add it later)
√ Would you like to install a styling system?
· No (or I'll add it later)
√ Would you like to install additional features with other plugins?No items were selected

Thanks! Here's what we'll now do:

    Create a new Gatsby site in the folder my-project

? Shall we do this? (Y/n) » Yes` },
];

export const fabBtnPackage: SnippetItem[] = [
    { title: "npm", code: 'npm install @syncfusion/react-buttons --save' },
    { title: "yarn", code: "yarn add @syncfusion/react-buttons"  }
];

export const gatsbyStyles: SnippetItem[] = [
    { title: "style.css", code: `@import '../../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../../node_modules/@syncfusion/react-buttons/styles/material3.css';` }
];

export const gatsbyFABSample: SnippetItem[] = [
    { title: "index.tsx", code: `import * as React from "react"
import { Color, Fab, FabPosition } from '@syncfusion/react-buttons';
import './style.css';

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
}` }
];

export const gatsbyRunSample: SnippetItem[] = [
    { title: "npm", code: 'npm run develop' },
    { title: "yarn", code: "yarn run develop"  }
];

export const cdnImportMap: SnippetItem[] = [
     { title: "index.html", code: `<script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@19",
          "react-dom/client": "https://esm.sh/react-dom@19/client?bundle",
          "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime",
          "@syncfusion/react-base": "https://esm.sh/@syncfusion/react-base?external=react",
          "@syncfusion/react-notifications": "https://esm.sh/@syncfusion/react-notifications?bundle&external=react,@syncfusion/react-base"
        }
      }
</script>`}
]

export const cdnImportStyle: SnippetItem[] = [
     { title: "index.html", code: `<link href="https://unpkg.com/@syncfusion/react-base@31.1.17/styles/material3.css" rel="stylesheet" />
<link href="https://unpkg.com/@syncfusion/react-notifications@31.1.17/styles/material3.css" rel="stylesheet" />
`}
]

export const cdnComponent: SnippetItem[] = [
     { title: "index.html", code: `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React 19 ESM + Syncfusion React Message Component</title>
      <!-- Import map -->
      <script type="importmap">
         {
           "imports": {
             "react": "https://esm.sh/react@19",
             "react-dom/client": "https://esm.sh/react-dom@19/client?bundle",
             "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime",
             "@syncfusion/react-base": "https://esm.sh/@syncfusion/react-base?external=react",
             "@syncfusion/react-notifications": "https://esm.sh/@syncfusion/react-notifications?bundle&external=react,@syncfusion/react-base"
           }
         }
      </script>
      <!-- Styles -->
      <link href="https://unpkg.com/@syncfusion/react-base@31.1.17/styles/material3.css" rel="stylesheet" />
      <link href="https://unpkg.com/@syncfusion/react-notifications@31.1.17/styles/material3.css" rel="stylesheet" />
   </head>
   <body style="margin: 100px">
      <div id="root"></div>
      <!-- Babel -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <!-- Your React App -->
      <script type="text/babel" data-type="module">
         import * as React from 'react';
         import { createRoot } from 'react-dom/client';
         import { Provider, registerLicense } from '@syncfusion/react-base';
         import { Message, Severity } from '@syncfusion/react-notifications';
         registerLicense("Your key");
         
         const App = () => {
           return (
             <Message severity={Severity.Success}>Your message has been sent successfully</Message>
           );
         }
         const root = createRoot(document.getElementById('root'));
         root.render(<App />);
      </script>
   </body>
</html>`}
]

export const astroProjectConfig: SnippetItem[] = [
    { title: "CMD", code: `dir     :  Where should we create your new project?
             astro-project
        
tmpl  :  How would you like to start your new project?
              > A basic, helpful starter project (recommended)
              — Use blog template
              — Use docs (Starlight) template
              — Use minimal (empty) template
deps  : Install dependencies? (recommended)
              ● Yes  ○ No
git      : Initialize a new git repository? (optional)
              ○ Yes  ● No` }
];

export const astroConfig: SnippetItem[] = [
    { title: "astro.config.mjs", code: `import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react()]
});` }
];

export const astroMsgSnippet: SnippetItem[] = [
    { title: "message.tsx", code: `import { Message, Severity } from '@syncfusion/react-notifications';

export default function App() {
    return (
        <div style={{ width: '350px', margin: '150px auto' }}>
            <Message severity={Severity.Success}>Your message has been sent successfully</Message>
        </div>
    );
}` }
];

export const astroStyles: SnippetItem[] = [
    { title: "message.tsx", code: `import '@syncfusion/react-base/styles/material3.css';
import '@syncfusion/react-notifications/styles/material3.css';` }
];

export const astroIndexSnippet: SnippetItem[] = [
    { title: "index.astro", code: `---
import Message from '../components/message';
---

<Message client:only="react" />
` }
];