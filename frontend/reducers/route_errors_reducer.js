import { CLEAR_ERRORS } from '../actions/session/session_actions';
import { RECEIVE_ROUTE_ERRORS } from '../actions/routes/route_actions';

const routeErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default routeErrorsReducer;
