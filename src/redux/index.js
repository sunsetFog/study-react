import {createStore, applyMiddleware, compose} from 'redux';
import reduxOrder from 'redux-order';
import reducers from './reduces';
import DevTools from './DevTools';

const enhancer = compose(
  applyMiddleware(reduxOrder()),
  DevTools.instrument()
);
/*
API 文档：createStore实例化vuex
*/
const store = createStore(
  reducers,
  enhancer
);

export default store;
