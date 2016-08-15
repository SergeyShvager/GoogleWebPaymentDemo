import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    //feed: (state) => state.feed,
    //user: (state) => state.user,
    checkout: (state) => state.checkout,
    notifications: (state) => state.notifications
});
