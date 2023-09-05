const UserServices = require("../services/user.services");

class UserControllers {
    constructor() {
        this.userServices = new UserServices()
    }
}

module.exports = UserControllers;