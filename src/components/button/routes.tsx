import { lazy } from 'react';
const ButtonContent = lazy(() => import('./index.mdx'));

export const buttonRoutes = [
    { id: 'button', pid: 'components', name: 'Button', category:"buttons" , hasChildren: false, component: <ButtonContent />}
];