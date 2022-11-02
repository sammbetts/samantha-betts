import { ComponentType } from 'react';
import { HomePage, BlogPage } from '../pages';

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
    form: {
      path: '/blog',
      component: BlogPage,
      title: 'Blog',
    },
  };

  return routes;
};

export const routes: Record<PageName, Page> = getRoutes();
