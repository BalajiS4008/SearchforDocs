import { lazy } from 'react';
const FormValidatorContent = lazy(() => import('./index.mdx'));

export const formValidatorRoutes = [
  {
    id: 'formValidator',
    pid: 'components',
    name: 'Form',
    category: 'inputs',
    hasChildren: false,
    label:"new",
    component: <FormValidatorContent />
  }
];