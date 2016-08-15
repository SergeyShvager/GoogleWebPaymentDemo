// @flow

import fetch from 'isomorphic-fetch';
import api from '../config/api';
import isEmpty from 'lodash/isEmpty';
import { showPublishPostNotification }  from './notification';

export const PUBLISH_POST_REQUEST = 'PUBLISH_POST_REQUEST';
export const PUBLISH_POST_SUCCESS = 'PUBLISH_POST_SUCCESS';


const company = 'testCompany';


function requestPublishPost() {
    return {
        type: PUBLISH_POST_REQUEST
    };
}

function receivePublishPost(post: Object) {
    return {
        type: PUBLISH_POST_SUCCESS,
        post
    }
}



export function publishPost(data, callback) {
    return (dispatch: Function, getState: Function) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': state.user.token,
            'X-Id-Provider': 'google'
        });

        dispatch(requestPublishPost());

        return fetch(api.post.publish(company), {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                dispatch(receivePublishPost(response));


                if (typeof callback == 'function') {
                    callback(response);
                }

                dispatch(showPublishPostNotification(response));
            });
    }
}
