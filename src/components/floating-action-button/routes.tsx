import { lazy } from 'react';
const FabContent = lazy(() => import('./index.mdx'));

export const fabRoutes = [
    { id: 'fab', pid: 'components', name: 'Floating Action Button', category:"buttons", hasChildren: false, component: <FabContent />}
];