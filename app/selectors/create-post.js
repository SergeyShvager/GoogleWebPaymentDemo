import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    user: (state) => state.user
});
