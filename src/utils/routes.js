import { lazy } from 'react';
import { generatePath } from 'react-router';

const Events = lazy(() => import('components/Events/Events'));
const Show = lazy(() => import('components/Shows/Show/Show'));
const Movie = lazy(() => import('components/Movies/Movie/Movie'));

const routes = {
  ROOT: {
    id: 'ROOT',
    path: '/',
    exact: true,
    Component: Events,
  },
  TV_SHOW: {
    id: 'TV_SHOW',
    path: '/tv-show/:id',
    exact: true,
    Component: Show,
  },
  MOVIE: {
    id: 'MOVIE',
    path: '/movie/:id',
    exact: true,
    Component: Movie,
  },
};

export const generateLink = (routeOrRouteId, params) => {
  let route;

  if (typeof routeOrRouteId === 'string') {
    route = routes[routeOrRouteId];
  } else if (routeOrRouteId.hasOwnProperty('id') && routes[routeOrRouteId.id]) {
    route = routeOrRouteId;
  }

  if (!route) {
    console.error(`Route not found error. Can't generate link for unknown route ${routeOrRouteId}`);

    return '#';
  }

  return generatePath(route.path, params);
};

export default routes;
