import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from 'reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

const logger = createLogger({
    collapsed: true,
    diff: true
});

const store = createStore(
  combineReducers({
      ...reducers,
      router: routerReducer
  }),
  applyMiddleware(middleware),
  applyMiddleware(logger)
);

export default store;