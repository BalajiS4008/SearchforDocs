import { lazy } from 'react';
const SkeletonContent = lazy(() => import('./index.mdx'));

export const skeletonRoutes = [
    { id: 'skeleton', pid: 'components', name: 'Skeleton', category:"notifications", hasChildren: false, component: <SkeletonContent />}
];
