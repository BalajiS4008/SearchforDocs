import { lazy } from 'react';

const MaterialUIContent = lazy(() => import('./material-UI.mdx'));
const ReduxFormContent = lazy(() => import('./redux-form.mdx'));
const ReduxStoreContent = lazy(() => import('./redux-store.mdx'));
const ReduxUndoContent = lazy(() => import('./redux-undo.mdx'));
const DotnetCoreContent = lazy(() => import('./dotnet-core.mdx'));
const FinalForm = lazy(() => import('./final-form.mdx'));
const SSRContent = lazy(() => import('./ssr.mdx'));

export const frameworksRoutes = [
    { id: 'frameworks', name: 'Frameworks', hasChildren: true },
    { id: 'frameworks-1', pid: 'frameworks', name: 'Material UI', component: <MaterialUIContent />},
    { id: 'frameworks-2', pid: 'frameworks', name: 'Redux Form', component: <ReduxFormContent />},
    { id: 'frameworks-3', pid: 'frameworks', name: 'Redux Store', component: <ReduxStoreContent />},
    { id: 'frameworks-4', pid: 'frameworks', name: 'Redux Undo', component: <ReduxUndoContent />},
	{ id: 'frameworks-5', pid: 'frameworks', name: '.NET Core', component: <DotnetCoreContent />},
    { id: 'frameworks-6', pid: 'frameworks', name: 'React Final Form', component: <FinalForm />},
    { id: 'frameworks-7', pid: 'frameworks', name: 'Server-Side Rendering', component: <SSRContent />}
];