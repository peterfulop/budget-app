import { NotFoundPage } from '../pages/404';
import { HomePage } from '../pages/home';
import { IRoute, Routes } from '../types';

const mainRoutes: IRoute[] = [
  {
    path: Routes.HOME,
    component: HomePage,
    name: 'Home',
  },
  {
    path: Routes.NOT_FOUND,
    component: NotFoundPage,
    name: '404',
  },
];

const routes: IRoute[] = [...mainRoutes];

export default routes;
