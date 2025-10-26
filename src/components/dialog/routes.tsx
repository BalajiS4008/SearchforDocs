import { lazy } from 'react';
const DialogContent = lazy(() => import('./index.mdx'));

export const dialogRoutes = [
    { id: 'dialog', pid: 'components', name: 'Dialog', category:"Layout", label:"new", hasChildren: false, component: <DialogContent /> },
];