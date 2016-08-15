// @flow

import assign from 'lodash/assign';
import filter from 'lodash/filter';

import { PUBLISH_POST_SUCCESS, REMOVE_NOTIFICATION } from './../actions/notification';

export default function notification(state:Object = [], action:{ type?: string, data?: Object } = {}) {
    switch (action.type) {
        case PUBLISH_POST_SUCCESS:
            const notifications = state.slice();

            notifications.push({
                data: action.data,
                message: 'Post successfuly created',
                id: action.id
            });

            return notifications;

        case REMOVE_NOTIFICATION:
            return filter(state, (n) => {
                return n.id !== action.id;
            });

        default:
            return state;
    }
}
