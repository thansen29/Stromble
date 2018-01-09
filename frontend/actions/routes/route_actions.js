import * as RouteAPIUtil from '../../util/routes_api_util';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

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

export const requestRoutes = () => dispatch => {
  return RouteAPIUtil.fetchRoutes().then((routes) => {
    dispatch(receiveRoutes(routes));
  }, () => {
    console.log("Something went wrong");
  });
};

export const requestRoute = id => dispatch => {
  return RouteAPIUtil.fetchRoute(id).then((route) => {
    dispatch(receiveRoute(route));
  }, () => {
    console.log("Something went wrong");
  });
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route).then((resp) => {
    dispatch(receiveRoute(resp));
  }, () => {
    console.log("Something went wrong");
  });
};

export const deleteRoute = id => dispatch => {
  return RouteAPIUtil.deleteRoute(id).then(() => {
    dispatch(removeRoute(id));
  }, () => {
    console.log("Something went wrong");
  });
};
