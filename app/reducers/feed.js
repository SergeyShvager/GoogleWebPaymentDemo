// @flow

import assign from 'lodash/assign';
import { FETCH_FEED_REQUEST, FETCH_FEED_SUCCESS } from './../actions/feed';

export default function fetchFeed(state:Object = { isFetching: false, isLoaded: false }, action:{ type?: string, feed?: Object } = {}) {
    switch (action.type) {
        case FETCH_FEED_REQUEST:
            return assign({}, state, {
                isFetching: true,
                isLoaded: false
            });

        case FETCH_FEED_SUCCESS:
            return assign({}, state, {
                isFetching: false,
                isLoaded: true,
                feed: action.feed
            });

        default:
            return state;
    }
}
