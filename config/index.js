const development = require('./development.json');
const test = require('./test.json');

const env = process.env.NODE_ENV || 'development';

const config = {
    development,
    test,
}

module.exports = config[env];