import React from 'react';
import { generatePath } from 'react-router';

const Events = React.lazy(() => import('components/Events/Events'));
const Show = React.lazy(() => import('components/Shows/Show/Show'));

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
};

export function generateLink(routeOrRouteId, params) {
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
}

export default routes;
