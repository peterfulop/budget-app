import { NotFoundPage } from '../pages/404';
import { App } from '../pages/app';
import { IRoute, Routes } from '../types';

const mainRoutes: IRoute[] = [
  {
    path: Routes.APP,
    component: App,
    name: 'App',
  },
  {
    path: Routes.NOT_FOUND,
    component: NotFoundPage,
    name: '404',
  },
];

const routes: IRoute[] = [...mainRoutes];

export default routes;
