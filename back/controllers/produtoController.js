const produtoModel = require('../models/produtoModel');

class ProdutoController {

    async salvar(req, res){
        const produto = req.body;

        ///Código para obter um novo código
        const max = await produtoModel.findOne({}).sort({'codigo': -1});    
        produto.codigo = max == null ? 1 : max.codigo + 1;

        ///Código para gravar o produto no banco
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);
    }

    async listar(req, res){
       var dadosDeProdutos = await produtoModel.find({});
       res.json(dadosDeProdutos);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const produto = await produtoModel.findOne({'codigo':codigo});
        res.json(produto);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        await produtoModel.findOneAndUpdate({'codigo':codigo}, req.body);
        res.status(200).send();
    }

    async apagar(req, res){
        const codigo = req.params.codigo;
        await produtoModel.findOneAndRemove({'codigo':codigo});
        res.status(200).send();
    }

}

module.exports = new ProdutoController();