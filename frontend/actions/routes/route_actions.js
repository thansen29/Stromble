import * as RouteAPIUtil from '../../util/routes_api_util';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoutes = routes => {
  return {
    type: RECEIVE_ROUTES,
    routes
  };
};

export const receiveRoute = route => {
  return {
    type: RECEIVE_ROUTE,
    route
  };
};

export const removeRoute = id => {
  return {
    type: REMOVE_ROUTE,
    routeId: id
  };
};

export const receiveRouteErrors = errors => {
  return {
    type: RECEIVE_ROUTE_ERRORS,
    errors
  };
};

export const requestRoutes = (page) => dispatch => {
  return RouteAPIUtil.fetchRoutes(page).then((routes) => {
    dispatch(receiveRoutes(routes));
  }, (errors) => {
    dispatch(receiveRouteErrors(errors));
  });
};

export const requestRoute = id => dispatch => {
  return RouteAPIUtil.fetchRoute(id).then((route) => {
    dispatch(receiveRoute(route));
  }, (errors) => {
    dispatch(receiveRouteErrors(errors));
  });
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route).then((resp) => {
    dispatch(receiveRoute(resp));
  }, (errors) => {
    dispatch(receiveRouteErrors(errors));
  });
};

export const deleteRoute = id => dispatch => {
  return RouteAPIUtil.deleteRoute(id).then(() => {
    dispatch(removeRoute(id));
  }, (errors) => {
    dispatch(receiveRouteErrors(errors));
  });
};
