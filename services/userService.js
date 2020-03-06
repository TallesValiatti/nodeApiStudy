class UserService {
    
    constructor(){}

    getAll() {
        console.log("Get all users");
    }

    getById(id) {
        console.log("Get user by id: " + id);
    }

    create(model) {
        console.log("Create user:"  + model);
    }
}

module.exports = UserService