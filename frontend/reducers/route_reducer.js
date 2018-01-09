import { RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE } from '../actions/routes/route_actions';

const defaultState = {
  routes: {},
  activeRoute: null
};

const routeReducer = (state = defaultState, action) => {
  let newState;
  let newRouteList;
  switch (action.type) {
    case RECEIVE_ROUTES:
      newRouteList = Object.assign({}, state.routes, action.routes);
      newState = Object.assign({}, state, { routes: newRouteList });
      return newState;
    case RECEIVE_ROUTE:
      newRouteList = Object.assign({}, state.routes, { [action.route.id]: action.route });
      newState = Object.assign({}, state, { routes: newRouteList, activeRoute: action.route });
      return newState;
    case REMOVE_ROUTE:
      newState = Object.assign({}, state);
      delete newState.routes[action.routeId];
      return newState;
    default:
      return state;
  }
};

export default routeReducer;
