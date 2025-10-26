import { lazy } from 'react';
const TextBoxContent = lazy(() => import('./index.mdx'));

export const textboxRoutes = [
    { id: 'textbox', pid: 'components', name: 'TextBox', category:"inputs", hasChildren: false, component: <TextBoxContent />}
];
