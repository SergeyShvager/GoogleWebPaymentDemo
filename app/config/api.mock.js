const baseUrl = 'http://private-dbec7-cofeedv1.apiary-mock.com/v1';

export default {
    company: {
        create: () => `${baseUrl}/companies`
    },
    feed: {
        get: (company) => `${baseUrl}/${company}/feed`
    },
    post: {
        publish: (company) => `${baseUrl}/${company}/posts`
    },
    team: {
        get: (company) => `${baseUrl}/${company}/teams`,
        create: (company) => `${baseUrl}/${company}/teams`,
    },
    user: {
        me: `${baseUrl}/users/me`
    }
};