let config = {
    port: 3000,
    auth: {
        client_id: 'steempt.com',
        redirect_uri: 'http://localhost:3000/auth/'
    },
    session: {
        secret: 'supersecretsession'
    }
};

module.exports = config;