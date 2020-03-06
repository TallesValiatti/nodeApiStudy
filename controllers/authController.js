const Result  = require('../DTO/shared/result')

const AuthService = require("../services/authService");
const _authService = new AuthService()

exports.login = (req, res, next) => {
    const token = _authService.CreateToken(req.body);
    const result = new Result();

    if(token)
    {
        result.Ok({"token:":token})
        return res.status(200).json(result);
    }
    else
    {
        result.Warning("Usuário não encontrado");
        return res.status(400).json(result);
    }
}