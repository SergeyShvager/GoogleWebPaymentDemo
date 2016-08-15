import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    checkout: (state) => {
        return state.checkout;
    }
});
