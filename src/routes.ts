import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

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
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
];

export default routes;
