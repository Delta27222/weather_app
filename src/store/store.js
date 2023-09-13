import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/rootReduces';
import thunk from 'redux-thunk';


const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk)
);

export const store = createStore(
  rootReducer,
  composedEnhancers
);