import { lazy } from 'react';

const IntroductionContent = lazy(() => import('./introduction.mdx'));
const SystemRequirementContent = lazy(() => import('./system-requirement.mdx'));

export const overviewRoutes = [
    { id: 'overview', name: 'Overview', hasChildren: true, expanded: true},
    { id: 'introduction', pid: 'overview', name: 'Introduction', component: <IntroductionContent />},
    { id: 'system-requirements', pid: 'overview', name: 'System Requirements', component: <SystemRequirementContent />},
];