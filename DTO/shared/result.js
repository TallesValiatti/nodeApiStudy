class Result {

    Ok(erro, msg, data)
    {
        this.erro = erro,
        this.message = [],
        this.data = data
    }

    InvalidRequestData(msg){
        this.erro = true,
        this.message = msg,
        this.data = []
    }

    Warning(msg){
        this.erro = true,
        this.message = msg,
        this.data = []
    }
}

module.exports = Result;