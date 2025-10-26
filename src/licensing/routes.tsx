import { lazy } from 'react';

const Overview = lazy(() => import('./overview.mdx'));
const GenerateLicense = lazy(() => import('./license-key-generation.mdx'));
const RegisterLicense = lazy(() => import('./license-key-registration.mdx'));

export const licenseRoutes = [
    { id: 'license', name: 'Licensing', hasChildren: true },
    { id: 'license-1', pid: 'license', name: 'Overview', component: <Overview />},
    { id: 'license-2', pid: 'license', name: 'Generating License Keys', component: <GenerateLicense />},
    { id: 'license-3', pid: 'license', name: 'Registering License Keys', component: <RegisterLicense />}
];

