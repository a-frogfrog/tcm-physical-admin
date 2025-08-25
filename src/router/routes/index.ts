import { lazy } from 'react';
import dashboardRoutes from './dashboard';
import authRoutes from './auth';
import errorRoutes from './error';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('#/layouts')),
    children: [dashboardRoutes],
  },
  authRoutes,
  errorRoutes,
];

export default routes;
