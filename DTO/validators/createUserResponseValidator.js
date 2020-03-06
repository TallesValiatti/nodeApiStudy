const { body } = require('express-validator');

const createUserValidator = [
    body("name").notEmpty().withMessage("Nome é obrigatório"),
    body("password").notEmpty().withMessage("Senha é obrigatória"),
    body("password").isLength({min: 10}).withMessage("Senha deve ter no mínimo 10 caracteres")
];

module.exports = createUserValidator;