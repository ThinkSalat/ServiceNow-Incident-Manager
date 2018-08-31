import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers/reducer';

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
);

export default configureStore;
