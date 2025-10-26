import { lazy } from 'react';
const ContextMeuContent = lazy(() => import('./index.mdx'));

export const contextMenuRoutes = [
    { id: 'contextMenu', pid: 'components', name: 'Context Menu', category:"navigation", hasChildren: false, component: <ContextMeuContent /> },
];