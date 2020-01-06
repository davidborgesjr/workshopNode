const model = require('./model');

const criarCliente = async (req, res) => {
    
    let result = await model.criar(req.body);    
    
    if(result.insertedId){
        let response = {
            status:'sucess',
            id: result.insertedId
        }
        return res
            .status(200)
            .json(response)
    }else{
        return res.status(500).json({'status':'error', 'mensagem':'aconteceu algum erro'})
    }
            
}

module.exports = {criarCliente};