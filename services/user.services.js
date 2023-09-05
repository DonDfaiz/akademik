const UserModels = require("../models/user.model");

class UserServices {
    constructor () {
        this.userModel = new UserModels();
    }

    async findByEmail(inputEmail) {
        const email = await this.userModel.findByEmail(inputEmail);
    }

    async registrasi(regis) {
      try {
          //validari user terdaftar atau belum
          const {email} = regis;
          const user  = await this.findByEmail(email);
          
          if (user) {
            throw new Error("User Terdaftar!")
          }

          //input req ke db
          const  userBaru =  new  UserModels(regis.id, regis.email, regis.password)
          return await this.userModel.save(userBaru)
        }
      } catch (error) {
        
      }
}

module.exports = UserServices;