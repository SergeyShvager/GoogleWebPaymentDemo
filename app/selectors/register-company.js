import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    status: (state) => state.registerCompany
});
