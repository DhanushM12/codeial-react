import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers'; //this will automatically get index.js
let store;
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
