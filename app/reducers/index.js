import assign from 'lodash/assign';
import notification from './notification';
import products from './products';
import { routerReducer } from 'react-router-redux';

const defaultState = {
  user: {}
};

const rootReducer = (state: Object = defaultState, action: Object) => {
  return assign({}, state, {
    notifications: notification(state.notifications, action),
    routing: routerReducer(state.routing, action),
    products: products(state.products, action)
  });
};

export default rootReducer;
