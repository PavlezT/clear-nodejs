const https = require('https');
const http = require('http');
const parseBody = require('./parseBody');

const OKcodes = [200, 201];

module.exports = (hostname, endpoint, method = 'GET', data = {}, extraHeaders = {}, useHttp = false) =>
    new Promise((resolve, reject) => (useHttp ? http : https).request({
        method,
        hostname: hostname.split(':')[0],
        path: endpoint,
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
            ...extraHeaders,
        },
        ...(hostname.split(':')[1] && {port: hostname.split(':')[1]})
    }, (response) => parseBody(response)
    .then(data => OKcodes.includes(response.statusCode) ? data : (() => {throw data})())
    .then(resolve)
    .catch(reject))
    .on('error', reject)
    .end(JSON.stringify(data)))