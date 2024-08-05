const http = require('http')
const Emitter = require('events')

module.exports = class Application {
    constructor() {
        this.emitter = new Emitter()
        this.middlewares = []
    }
    use(middleware) {
        this.middlewares.push(middleware)
    }

    addRoutre(router) {
        Object.keys(router.endpoints).forEach(path => {
            const methods = router.endpoints[path] // (1) структура обьекта эндпоинтов
            Object.keys(methods).forEach(method => {
                const handler = methods[method]
                this.emitter.on(`${path}_${method}`, (req, res) => {
                    handler(req, res)
                })
            })
        })
    }

    listen(port, hanler) {
        const server = http.createServer((req, res) => {
            let body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', () => {
                if (body) {req.body = JSON.parse(body)}
                this.middlewares.forEach((middleware) => { middleware(req, res); });
                const emmited = this.emitter.emit(`${req.pathname}_${req.method}`, req, res)
                if (!emmited) {
                    res.end()
                }
            })

        })
        server.listen(port, hanler);
    }
}


/* (1) структура обьекта эндпоинтов
const endpoints = {
'/users': {
    'GET': handler1,
    'POST': handler2,
    'DELETE': handler3
},
'/post': {
    'GET': handler1,
    'POST': handler2,
    'DELETE': handler3
}
};
*/