import { createStructuredSelector }  from 'reselect';

export default createStructuredSelector({
    teams: (state) => state.teams
})