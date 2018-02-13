import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import dropdownReducer from './dropdown_reducer';
import searchReducer from './search_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  dropdown: dropdownReducer,
  search: searchReducer
});

export default uiReducer;
