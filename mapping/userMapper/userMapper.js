const User = require("../../models/userModel");

userMapper = (obj) => {
    return new User(obj.name, obj.password);
};

module.exports = userMapper