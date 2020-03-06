const { check, validationResult } = require('express-validator');
const Result  = require('../DTO/shared/result')
const UserService = require("../services/userService");
const UserMapper = require('../mapping/userMapper/userMapper');
const UserResponseMapper = require("../mapping/userMapper/response/userResponseMapper")
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

    //request to model
    const model = UserMapper(req.body);

    //save the new user
    _userService.create(model);
 
    //create response user
    const modelResponse = UserResponseMapper(model);

    //create the result
    result.Ok(modelResponse);

    res.status(200).json(result);
};