const { check, validationResult } = require('express-validator');
const Result  = require('../DTO/shared/result')
const UserService = require("../services/userService");
const _userService = new UserService()

exports.getAll = (req, res, next) => {
    res.status(200).json(
        [
            {
                "id":1
            },
            {
                "id":2
            }
        ]);    

    _userService.getAll();
};

exports.getById = (req, res, next) => {

    const id = req.params.id;

    _userService.getById(id);

    res.status(200).json({
        "id": id
    });
};

exports.create = (req, res, next) => {

    var result = new Result();

    //validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        result.InvalidRequestData(errors.array());
        return res.status(200).json(result);
    }
    
    //extract the new data
    const name = req.body.name;
    const password = req.body.password; 

    //save the new user
    _userService.create();

    //return thew value
    const array = [];
    array.push({
        "name": name,
        "password":password
    });
    //create the result
    result.Ok(false, "", array);

    res.status(200).json(result);
};