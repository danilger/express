const Router = require("../framework/router");
const controller = require("./user.controller.js");

const router = new Router()

router.get('/users', controller.getUsers)

router.post('/', controller.addUser)

module.exports = router