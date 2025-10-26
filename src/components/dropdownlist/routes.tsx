import { lazy } from 'react';
const DropdownlistContent = lazy(() => import('./index.mdx'));

export const dropdownlistRoutes = [
    { id: 'dropdownlist', pid: 'components', name: 'Dropdown List', category:"dropdowns", label:"new", hasChildren: false, component: <DropdownlistContent /> },
];