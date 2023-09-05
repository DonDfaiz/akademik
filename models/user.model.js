const fs = require("node:fs/promises");

class UserModels {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  async connect() {
    const file = await fs.readFile("./database/users.json", {
      encoding: "utf-8",
    });
    return eval(file);
  }

  async findByEmail(cariEmail) {
    try {
      const users = await this.connect();
      const userWithEmail = users.find(user => user.email === cariEmail);
      return userWithEmail;
    } catch (error) {
        console.error(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/users.json",  JSON.stringify(data,null,2));
    } catch (error) {
      console.error(error);
    }

}

module.exports = UserModels;
