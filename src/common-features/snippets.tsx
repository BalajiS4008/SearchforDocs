import { SnippetItem } from '../common/snippet'

export const loadcldrSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import { loadCldr } from "@syncfusion/react-base";
import enNumberData from "@syncfusion/react-cldr-data/main/en/numbers.json";
import entimeZoneData from "@syncfusion/react-cldr-data/main/en/timeZoneNames.json";

loadcldr(enNumberData, entimeZoneData);` }
];

export const cultureCurrencySnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import {setCulture, setCurrencyCode} from '@syncfusion/react-base';
setCulture('ar');
setCurrencyCode('QAR');` }
];

export const customFormatSnippet: SnippetItem[] = [
  { title: "App.tsx", code: `import { Internationalization } from '@syncfusion/react-base';

const intl = Internationalization();
const formattedString: string =  intl.formatDate(new Date('04/01/2025 10:20:33'), { format: "'year:'y 'month:' MM"  });
//Output: "year:2025 month:04"` }
];

export const CSPGoogleTag: SnippetItem[] = [
    { title: "HTML", code: `<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com/;
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data:;" />
</head>`
}];

export const dragdropNpm: SnippetItem[] = [
  { title: "NPM", code: 'npm install @syncfusion/react-base' }
];


export const dragdropImport: SnippetItem[] = [
  { 
    title: "App.tsx", 
    code: `import { Draggable } from '@syncfusion/react-base';` 
  }
];

export const dragdropSnippet: SnippetItem[] = [
  { 
    title: "App.tsx", 
    code: `import { Draggable } from '@syncfusion/react-base';
    
    export default function App() {
      return (
        <div style={{ padding: '20px', textAlign: 'center', position: 'relative', height: '200px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Draggable clone={false}>
                <div className="draggable">
                    Drag me
                </div>
              </Draggable>
            </div>
        </div>
      );
    }` 
  }
];

export const animationNpm: SnippetItem[] = [
  { title: "NPM", code: 'npm install @syncfusion/react-base' }
];

export const animationStyles: SnippetItem[] = [
  { 
    title: "App.css", 
    code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';`
  }
];

export const animationImport: SnippetItem[] = [
  { 
    title: "App.tsx", 
    code: `import { Fade } from '@syncfusion/react-base';`
  }
];

export const fadeSnippet: SnippetItem[] = [
  { 
    title: "App.tsx", 
    code: `import { useState } from 'react';
import { Fade } from '@syncfusion/react-base';
import { Button } from '@syncfusion/react-buttons';
import './animation.css';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ height: '300px' }}>
      <Button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <div className="animation-container">
        <Fade in={show} duration={500}>
          <div className="animation-box">Fade</div>
        </Fade>
      </div>
    </div>
  );
}`
  }
];
