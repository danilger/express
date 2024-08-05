module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method, path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]

        if (endpoint[method]) {
            throw new Error(`Endpoint ${path} already registered for ${method} method`)
        }
        endpoint[method] = handler
    }

    get(path, handler) {
        this.request("GET", path, handler)
    }

    post(path, handler) {
        this.request("POST", path, handler)
    }

    delete(path, handler) { this.request("DELETE", path, handler) }

    put(path, handler) { this.request("PUT", path, handler) }

    patch(path, handler) { this.request("PATCH", path, handler) }
}



/*
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