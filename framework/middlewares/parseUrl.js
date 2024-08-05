module.exports = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl)
    const params = {}
    parsedUrl.searchParams.forEach((value, name) => {
        params[name] = value
    })
    req.params = params
    req.pathname = parsedUrl.pathname
}