module.exports = {
    app_mode: 'dev',
    portNo: 3100,
    db: {
        dev: {
            main: {
                name: 'ChoobinDb',
                address: '127.0.0.1:27017'
            },
            log: {
                name: 'ChoobinDb_log',
                address: '127.0.0.1:27017'
            }
        },
        deploy: {
            main: {
                name: 'ChoobinDb',
                address: 's10.liara.ir:32108'
            },
            log: {
                name: 'ChoobinDb_log',
                address: 's10.liara.ir:32108'
            },
            userName: 'root',
            password: 'nS1Zkejwe0rPN6HT5hyBjTKY'
        }
    },
    jwtExpireTime: 3000,
    tokenHashKey: 'YOUR_TOKEN_HASH_KEY',
    jwtSecret: "YOUR_JWT_SECRET_KEY"


}
