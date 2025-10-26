import { lazy } from 'react';
const ChipListContent = lazy(() => import('./index.mdx'));

export const chipListRoutes = [
    { id: 'chipList', pid: 'components', name: 'ChipList', category:"buttons", hasChildren: false, component: <ChipListContent /> },
];