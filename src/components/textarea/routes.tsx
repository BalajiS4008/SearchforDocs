import { lazy } from 'react';
const TextAreaContent = lazy(() => import('./index.mdx'));

export const textareaRoutes = [
    { id: 'textarea', pid: 'components', name: 'TextArea', category:"inputs", hasChildren: false, component: <TextAreaContent />}
];
