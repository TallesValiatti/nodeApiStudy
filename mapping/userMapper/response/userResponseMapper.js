const UserResponse = require("../../../DTO/response/userResponse");

userResponseMapper = (obj) => {
    return new UserResponse(obj.name, obj.password);
};

module.exports = userResponseMapper