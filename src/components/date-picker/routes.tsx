import { lazy } from 'react';
const DatePickerContent = lazy(() => import('./index.mdx'));

export const datePickerRoutes  = [
    { id: 'datePicker', pid: 'components', name: 'Date Picker', category:"Calendar", label:"new", hasChildren: false, component: <DatePickerContent /> },
];