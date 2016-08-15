const baseUrl = 'http://api.cofeed.io/v1';

export default {
    company: {
        create: (company) => `${baseUrl}/companies`
    },
    feed: {
        get: (company) => `${baseUrl}/${company}/feed`
    },
    post: {
        publish: (company) => `${baseUrl}/${company}/posts`
    },
    team: {
        get: (company) => `${baseUrl}/${company}/teams`
    },
    user: {
        me: `${baseUrl}/users/me`
    }
};