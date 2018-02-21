import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

// const persistConfig = {
//   key: 'root',
//   storage,
// };

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState = {}) => (
  createStore(
    // persistedReducer,
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
// export default () => {
//   let store = configureStore;
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
