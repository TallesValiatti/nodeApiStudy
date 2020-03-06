const express = require('express');
const userController = require("../controllers/userController");
const createUserValidator = require('../DTO/validators/createUserResponseValidator')
const Result  = require('../DTO/shared/result')
const AuthService = require("../services/authService");
const _authService = new AuthService()

const router = express.Router();

function Authorization(claim) {
    return [
        (req, res, next) => {

            if(req.headers.authorization)
            {
                _authService.authorization(req.headers.authorization
                    .replace("Bearer ", ""), claim).then( (tokenDecoded) => {

                        if(claim){
                            const auth = tokenDecoded.claims.includes(claim);
                            if(!auth)
                                res.status(403).json({"status":"Unauthorized"}) ;
                            else {
                                req.user = tokenDecoded;
                                next();
                            }
                        }
                        else {
                            req.user = tokenDecoded;
                            next();
                        }
                    }).catch((err) => {
                        res.status(403).json({"status":"Unauthorized"}) 
                    });
            }
            else
                res.status(401).json({"status":"Unauthenticated"}) 
        }
    ];
}

router.get('/', Authorization("asas") , userController.getAll);
router.get('/:id',Authorization("canGet"), userController.getById);
router.post('/', createUserValidator ,userController.create);

module.exports = router;