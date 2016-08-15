import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  //feed: (state) => state.feed,
  //user: (state) => state.user,
  notifications: (state) => state.notifications,
  products: (state) => state.products
});
