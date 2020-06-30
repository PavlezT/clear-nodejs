module.exports = (router) => {
    router.get('/', (req, res) => {
        res.end('hello')// front-end parts could be hosted from this part
    })
}