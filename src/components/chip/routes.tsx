import { lazy } from 'react';
const ChipContent = lazy(() => import('./index.mdx'));

export const chipRoutes = [
    { id: 'chip', pid: 'components', name: 'Chip', category:"buttons", hasChildren: false, component: <ChipContent /> }
];
