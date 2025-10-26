import { lazy } from 'react';
const TooltipContent = lazy(() => import('./index.mdx'));

export const tooltipRoutes = [
    { id: 'tooltip', pid: 'components', name: 'Tooltip', category: "Layout", hasChildren: false, component: <TooltipContent /> }
];