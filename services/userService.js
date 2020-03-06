class UserService {
    
    constructor(){}

    getAll() {
        console.log("Get all users");
    }

    getById(id) {
        console.log("Get user by id: " + id);
    }

    create() {
        console.log("Create user");
    }
}

module.exports = UserService