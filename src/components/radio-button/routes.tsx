import { lazy } from 'react';
const RadioButtonContent = lazy(() => import('./index.mdx'));

export const radiobuttonRoutes = [
    { id: 'radiobutton', pid: 'components', name: 'Radio Button', category:"buttons", hasChildren: false, component: <RadioButtonContent />}
];