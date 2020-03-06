const express = require('express');
const feedController = require("../controllers/userController");
const createUserValidator = require('../DTO/validators/createUserResponseValidator')
const router = express.Router();

router.get('/', feedController.getAll);
router.get('/:id', feedController.getById);
router.post('/', createUserValidator ,feedController.create);

module.exports = router;