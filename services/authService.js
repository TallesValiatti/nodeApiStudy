const jwt = require('jsonwebtoken');
const secrets = require("../secrets/secrets")

class AuthService {
    constructor (){}

    CreateToken({name, password}) {
        if (name === "talles" && password === "123456"){

            const claims = ["canGetAll","canGetOne"];
            const token = jwt.sign({ name,claims }, secrets.tokenKey, {
                expiresIn: 30000 // expires in 5min
              });
            return token
        }
        else {
            return null
        }
        
    };

    async authorization(token, claims){
        
        console.log(token, claims);
        
        let promise = new Promise(function(resolve, reject) {
            jwt.verify(token, secrets.tokenKey, function(err, decoded){
                if(err){
                    reject(new Error(err));
                } 
                else {
                    console.log(decoded);
                    resolve(decoded);
                }
            });
        });

        return promise;
    }
}

module.exports = AuthService