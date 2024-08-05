const User = require("./user-model")

module.exports = {
    async getUsers(req, res) {
        let users
        if (req.params?.id) {
            users = await User.findById(req.params.id)
        } else {
            users = await User.find()
        }
        res.send(users)
    },
    async addUser(req, res) {
        const user = await User.create(req.body)
        res.send(user)
    }
}