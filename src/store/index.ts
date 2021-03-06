import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';

export const epicMiddleware = createEpicMiddleware();

// configure middlewares
export const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), thunk, epicMiddleware];

// compose enhancer
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer(history), initialState, enhancer);

// export store singleton instance
export default store;
