// @flow

import merge from 'lodash/merge';

import {
    CHECK_USER_AUTH,
    SAVE_USER_TOKEN,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from './../actions/user';

import {
    CREATE_COMPANY_REQUEST,
    CREATE_COMPANY_SUCCESS
} from './../actions/company';

type UserAction = {
    type?: string,
    token?: string
};

export default function(
    state: { isLogged: boolean, token?: string } = { isLogged: false, info: {} },
    action: UserAction = {}) {

    switch (action.type) {
        case SAVE_USER_TOKEN:
            localStorage.setItem('token', action.token);

            return {
                isLogged: true,
                token: action.token
            };

        case CHECK_USER_AUTH:
            const userToken = localStorage.getItem('token');

            if (userToken) {
                return {
                    isLogged: true,
                    token: userToken
                };
            }

            return {
                isLogged: false
            };


        case FETCH_USER_REQUEST:
            return Object.assign({}, state, {
                info: {
                    isFetching: true
                }
            });


        case FETCH_USER_SUCCESS:
            return Object.assign({}, state, {
                info: {
                    isFetching: false,
                    data: action.user
                }
            });

        case CREATE_COMPANY_SUCCESS:
            const companies = state.info.data.companies.concat(action.company);

            return merge({}, state, {
                info: {
                    data: {
                        companies
                    }
                }
            });
        default:
            return state;
    }

}