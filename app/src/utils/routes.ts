import { ComponentType } from 'react';
import { HomePage } from '../pages';

export interface Page {
  path: string;
  title: string;
  component: ComponentType;
}

export type PageName = 'dashboard' | 'home' | string;

const getRoutes = () => {
  const routes: Record<PageName, Page> = {
    home: {
      path: '/',
      component: HomePage,
      title: 'Home',
    },
    // form: {
    //   path: '/dashboard',
    //   component: DashboardPage,
    //   title: 'Dashboard',
    // },
  };

  return routes;
};

export const routes: Record<PageName, Page> = getRoutes();
