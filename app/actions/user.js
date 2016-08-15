import { hashHistory } from 'react-router';
import api from './../config/api';

export const CHECK_USER_AUTH = 'CHECK_USER_AUTH';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export function checkUserAuth() {
    return function(dispatch, getState) {
        dispatch(checkUserToken());

        const state = getState();
        if (state.user.isLogged) {
            dispatch(fetchUser());
        }
    }
}

function checkUserToken() {
    return {
        type: CHECK_USER_AUTH
    };
}

export function saveUserToken(token) {
    return {
        type: SAVE_USER_TOKEN,
        token
    }
}


function requestUser() {
    return {
        type: FETCH_USER_REQUEST
    };
}

function receiveUser(user: { user: Array<Object> }) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}


export function fetchUser() {
    return (dispatch: Function, getState: Function) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': token,
            'X-Id-Provider': 'google'
        });

        dispatch(requestUser());

        return fetch(api.user.me, {
            headers: headers,
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(receiveUser(response));

                if (!response.companies.length) {
                    hashHistory.push('/register-company');
                }
            });
    }
}

