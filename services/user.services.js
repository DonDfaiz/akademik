class UserServices {
    constructor () {
        this.userModel = new UserModels();
    }

    async findByEmail(inputEmail) {
        const email = await this.userModel.findByEmail(inputEmail);
    }
}

module.exports = UserServices;