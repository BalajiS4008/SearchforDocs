import { lazy } from 'react';
const NumericTextBoxContent = lazy(() => import('./index.mdx'));

export const numerictextboxRoutes = [
    { id: 'numerictextbox', pid: 'components', name: 'Numeric TextBox', category:"inputs", hasChildren: false, component: <NumericTextBoxContent />}
];
