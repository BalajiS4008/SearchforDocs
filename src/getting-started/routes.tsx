import { lazy } from 'react';

const ViteContent = lazy(() => import('./vite.mdx'));
const NextJSContent = lazy(() => import('./nextjs.mdx'));
const PreactContent = lazy(() => import('./preact.mdx'));
const GatsbyContent = lazy(() => import('./gatsby.mdx'));
const RemixApp = lazy(() => import('./remix-app.mdx'));
const SharePoint = lazy(() => import('./sharepoint.mdx'));
const CDNContent = lazy(() => import('./cdn.mdx'));
const AstroContent = lazy(() => import('./astro.mdx'));

export const gettingStartedRoutes = [
    { id: 'getting-started', name: 'Getting Started', hasChildren: true },
    { id: 'getting-started-1', pid: 'getting-started', name: 'Vite', component: <ViteContent />},
    { id: 'getting-started-2', pid: 'getting-started', name: 'NextJS', component: <NextJSContent />},
    { id: 'getting-started-3', pid: 'getting-started', name: 'Remix App', component: <RemixApp />},
    { id: 'getting-started-4', pid: 'getting-started', name: 'SharePoint', component: <SharePoint />},
    { id: 'getting-started-5', pid: 'getting-started', name: 'Preact', component: <PreactContent />},
    { id: 'getting-started-6', pid: 'getting-started', name: 'Gatsby', component: <GatsbyContent />},
	{ id: 'getting-started-7', pid: 'getting-started', name: 'Astro', component: <AstroContent />},
    { id: 'getting-started-8', pid: 'getting-started', name: 'Single Page Application', component: <CDNContent />},
];