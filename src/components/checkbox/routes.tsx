import { lazy } from 'react';
const CheckboxContent = lazy(() => import('./index.mdx'));

export const checkboxRoutes = [
    { id: 'checkbox', pid: 'components', name: 'Checkbox', category:"inputs", hasChildren: false, component: <CheckboxContent />}
];