import { lazy } from 'react';
const ToolbarContent = lazy(() => import('./index.mdx'));

export const toolbarRoutes = [
    { id: 'toolbar', pid: 'components', name: 'Toolbar', category:"navigation", hasChildren: false, component: <ToolbarContent /> }
];
