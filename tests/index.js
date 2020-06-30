process.env.NODE_ENV = 'test';

const server = require('child_process').fork('./app.js', null, {env: {NODE_ENV: 'test'}});
const {run} = require('./test_engine');

require('./unit');
require('./integration');

setTimeout(() => run(), 1500);

setTimeout(() => server.kill(), 4000);