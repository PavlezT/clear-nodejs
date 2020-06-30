const parseBody = require('../helpers/parseBody');

const router = { // TODO: write as class
    routes: new Map(),
    get: function (url, cb) {
        this.routes.set(`GET:${url}`, cb);
    },
    post: function (url, cb) {
        this.routes.set(`POST:${url}`, cb);
    },
}

require('./api')(router);
require('./static')(router);

module.exports = async (req, res) => {
    const key = `${req.method}:${req.url}`; // TODO: should work with RegExp like GET:/some/url/*
    if (router.routes.has(key)) {
        if(req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
            await parseBody(req);
        }

        return router.routes.get(key)(req,res);
    }
    
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Page doest not exists');
}