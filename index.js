const UserModels = require("./models/user.model");

async function main() {
    const cekUser = new UserModels();
    console.log(await cekUser.findByEmail("bob@example.com"));
}

main();