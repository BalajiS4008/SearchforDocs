import { lazy } from 'react';
const SplitButtonContent = lazy(() => import('./index.mdx'));

export const splitbtnRoutes = [
    { id: 'splitbutton', pid: 'components', name: 'Split Button', category:"buttons", hasChildren: false, component: <SplitButtonContent />}
];