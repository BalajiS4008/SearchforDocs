import { lazy } from 'react';
const DropdownContent = lazy(() => import('./index.mdx'));

export const dropDownRoutes = [
    { id: 'dropdown', pid: 'components', name: 'Dropdown Button', category:"buttons", hasChildren: false, component: <DropdownContent />}
];