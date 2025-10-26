import { lazy } from 'react';

const ThemeContent = lazy(() => import('./theme.mdx'));
const StyledComponent = lazy(() => import('./styled-component.mdx'));
const CSSVariables = lazy(() => import('./css-variables.mdx'));
const IconContent = lazy(() => import('./icons.mdx'));
// const ShadowDomContent = lazy(() => import('./shadow-dom.mdx'));
// const ThemeCustomizationContent = lazy(() => import('./theme-customization.mdx'));

export const AppearanceSectionRoutes = [
    { id: 'appearance', name: 'Appearance', hasChildren: true },
    { id: 'appearance-1', pid: 'appearance', name: 'Built-in Themes', component: <ThemeContent />},
    { id: 'appearance-2', pid: 'appearance', name: 'Icons', component: <IconContent />},
    { id: 'appearance-3', pid: 'appearance', name: 'Styled Component', component: <StyledComponent />},
    { id: 'appearance-4', pid: 'appearance', name: 'CSS Variables', component: <CSSVariables />},
    // { id: 'appearance-5', pid: 'appearance', name: 'Shadow DOM', component: <ShadowDomContent />},
	// { id: 'appearance-6', pid: 'appearance', name: 'Theme Customization', component: <ThemeCustomizationContent />}
];