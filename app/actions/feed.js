// @flow

import fetch from 'isomorphic-fetch';
import api from '../config/api';
import isEmpty from 'lodash/isEmpty';

export const FETCH_FEED_REQUEST = 'FETCH_FEED_REQUEST';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';


const company = 'testCompany';


function requestFeed() {
    return {
        type: FETCH_FEED_REQUEST
    };
}

function receiveFeed(feed: { counters: Array<Object>, posts: Array<Object> }) {
    return {
        type: FETCH_FEED_SUCCESS,
        feed
    }
}

function shouldFetchFeed(feed) {
    if (isEmpty(feed.feed)) {
        return true;
    }

    return false;
}

export function fetchFeed() {
    return (dispatch: Function, getState: Function) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        if (!shouldFetchFeed(state.feed)) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': state.user.token,
            'X-Id-Provider': 'google'
        });

        dispatch(requestFeed());

        return fetch(api.feed.get(company), {
            headers: headers,
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(receiveFeed(response));
            });
    }
}
