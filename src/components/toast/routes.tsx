import { lazy } from 'react';
const ToastContent = lazy(() => import('./index.mdx'));

export const toastRoutes = [
    { id: 'toast', pid: 'components', name: 'Toast', category:"notifications", hasChildren: false, component: <ToastContent />}
];
