const express = require('express');
const userController = require("../controllers/userController");
const createUserValidator = require('../DTO/validators/createUserResponseValidator')
const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', createUserValidator ,userController.create);

module.exports = router;