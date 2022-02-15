const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Anomic",
    email: "daniel@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];
module.exports = users;
