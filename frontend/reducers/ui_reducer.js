import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import dropdownReducer from './dropdown_reducer';
import loadingReducer from './loading_reducer';
import searchReducer from './search_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer,
  loading: loadingReducer,
  search: searchReducer
});

export default uiReducer;
