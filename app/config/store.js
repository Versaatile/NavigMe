//import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';

import {createStore,applyMiddleware,combineReducers,} from 'redux';
import {createReduxBoundAddListener,createReactNavigationReduxMiddleware,} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import reducer from '../reducers';

/*// mount it on the Store
const store = createStore(
  reducer,
)*/

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const store = createStore(
  reducer,
  applyMiddleware(middleware),
); 

export default store;

