// @flow

import assign from 'lodash/assign';
import { CREATE_COMPANY_REQUEST, CREATE_COMPANY_SUCCESS } from './../actions/company';
import { CREATE_TEAM_REQUEST, CREATE_TEAM_SUCCESS } from './../actions/team';

export default function company(
    state:Object = { createCompany: {}, createTeam: {} },
    action:{ type?: string } = {}
) {
    switch (action.type) {
        case CREATE_COMPANY_REQUEST:
            return assign({}, state, {
                createCompany: {
                    isFetching: true
                }
            });

        case CREATE_COMPANY_SUCCESS:
            return assign({}, state, {
                createCompany: {
                    isFetching: false
                }
            });

        case CREATE_TEAM_REQUEST:
            return assign({}, state, {
                createTeam: {
                    isFetching: true
                }
            });

        case CREATE_TEAM_SUCCESS:
            return assign({}, state, {
                createTeam: {
                    isFetching: false
                }
            });

        default:
            return state;
    }
}
