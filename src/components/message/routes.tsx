import { lazy } from 'react';
const MessageContent = lazy(() => import('./index.mdx'));

export const messageRoutes = [
    { id: 'message', pid: 'components', name: 'Message', category:"notifications", hasChildren: false, component: <MessageContent />}
];

