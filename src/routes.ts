import HomePage from './pages/HomePage';

export interface AppRoute {
  path: string;
  component: any;
  exact?: boolean;
  routes?: AppRoute[];
}

const routes: AppRoute[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
];

export default routes;
