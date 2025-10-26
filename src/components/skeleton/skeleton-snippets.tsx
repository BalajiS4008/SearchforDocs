import { SnippetItem } from '../../common/snippet'

export const SkeletonNpm: SnippetItem[] = [
    { title: "NPM", code: 'npm install @syncfusion/react-notifications' }
];

export const SkeletonImport: SnippetItem[] = [
    { title: "App.tsx", code: 'import { Skeleton } from "@syncfusion/react-notifications";' }
];

export const SkeletonCode: SnippetItem[] = [
    { title: "App.tsx", code: `import { Skeleton, Variants } from "@syncfusion/react-notifications";
import './App.css';

export default function App() {
    return (
        <div className="component-section">
            <Skeleton variant={Variants.Rectangle} width='100px' height={130} />
        </div>
    );
}` }
];

export const SkeletonStyles: SnippetItem[] = [
    { title: "App.css", code: `@import '../node_modules/@syncfusion/react-base/styles/material3.css';
@import '../node_modules/@syncfusion/react-notifications/styles/material3.css';` }
];
