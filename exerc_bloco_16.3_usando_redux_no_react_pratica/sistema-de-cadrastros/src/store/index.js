import { combineReducers, createStore, applyMiddleware } from 'redux';
import listReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
));

export default store;