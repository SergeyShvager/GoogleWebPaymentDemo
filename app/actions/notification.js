import uuid from 'uuid';

export const PUBLISH_POST_SUCCESS = 'NOTIFICATION_PUBLISH_POST_SUCCESS';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const DELAY = {
    info: 4000
};

function showNotification(options) {
    return {
        type: options.type,
        data: options.data,
        id: uuid.v1(),
        delay: DELAY[options.level]
    }
}
export function showPublishPostNotification(post) {
    return (dispatch) => {
        const postAction = showNotification({
            type: PUBLISH_POST_SUCCESS,
            data: post,
            level: 'info'
        });

        dispatch(postAction);

        setTimeout(() => {
            dispatch(removeNotification(postAction.id));
        }, postAction.delay);
    }

}


export function removeNotification(id) {
    return {
        type: REMOVE_NOTIFICATION,
        id
    };
}