// @flow

import assign from 'lodash/assign';
import { FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS } from './../actions/team';

export default function fetchTeams(state:Object = { isFetching: false, isLoaded: false }, action:{ type?: string, feed?: Object } = {}) {
    switch (action.type) {
        case FETCH_TEAMS_REQUEST:
            return assign({}, state, {
                isFetching: true,
                isLoaded: false
            });

        case FETCH_TEAMS_SUCCESS:
            return assign({}, state, {
                isFetching: false,
                isLoaded: true,
                teams: action.teams
            });

        default:
            return state;
    }
}
