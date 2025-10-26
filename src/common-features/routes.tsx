import { lazy } from 'react';

const AccessibilityContent = lazy(() => import('./accessibility.mdx'));
const LocalizationContent = lazy(() => import('./localization.mdx'));
const RightToLeftContent = lazy(() => import('./right-to-left.mdx'));
const SecurityContent = lazy(() => import('./security.mdx'));
// const CSPContent = lazy(() => import('./content-security-policy.mdx'));
// const DragDropContent = lazy(() => import('./dragdrop.mdx'));
// const AnimationContent = lazy(()=> import('./animation.mdx'));

export const commonSectionRoutes = [
    { id: 'Common', name: 'Common Features', hasChildren: true },
    { id: 'Common-1', pid: 'Common', name: 'Accessibility', component: <AccessibilityContent />},
    { id: 'Common-2', pid: 'Common', name: 'Right-To-Left', component: <RightToLeftContent />},
    { id: 'Common-3', pid: 'Common', name: 'Localization', component: <LocalizationContent />},
    // { id: 'Common-4', pid: 'Common', name: 'Drag and Drop', component: <DragDropContent />},
    // { id: 'Common-5', pid: 'Common', name: 'Animation', component: <AnimationContent />},
    { id: 'Common-4', pid: 'Common', name: 'Security', component: <SecurityContent />},
    // { id: 'Common-5', pid: 'Common', name: 'Content Security Policy', component: <CSPContent />}
];