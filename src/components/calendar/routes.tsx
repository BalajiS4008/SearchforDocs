import { lazy } from 'react';
const CalendarContent = lazy(() => import('./index.mdx'));

export const calendarRoutes = [
    { id: 'calendar', pid: 'components', name: 'Calendar', category:"Calendar", label:"new", hasChildren: false, component: <CalendarContent/> },
];