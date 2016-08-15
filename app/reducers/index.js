import assign from 'lodash/assign';
import fetchFeed from './feed';
import user from './user';
import notification from './notification';
import teams from './teams';
import registerCompany from './register-company';
import products from './products';
import { routerReducer } from 'react-router-redux';

const defaultState = {
  feed: {},
  user: {}
};

const rootReducer = (state: Object = defaultState, action: Object) => {
  return assign({}, state, {
    feed: fetchFeed(state.feed, action),
    notifications: notification(state.notifications, action),
    routing: routerReducer(state.routing, action),
    teams: teams(state.teams, action),
    user: user(state.user, action),
    registerCompany: registerCompany(state.registerCompany, action),
    products: products(state.products, action)
  });
};

export default rootReducer;
