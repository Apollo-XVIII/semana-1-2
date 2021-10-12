const models = require('../models');

module.exports = {
    add: async(req, res, next) => {
        try {

            //Hacer las validaciones para adicionar una nueva receta
            const reg = await models.Receta.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Receta.find();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },
    listOne: async(req, res, next) => {
        const id = req.params.id;
        try {
            let valor = req.query.valor;
            const reg = await models.Receta.findById(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },
    update: async(req, res, next) => {            
        const id = req.params.id;
        const body = req.body;

        try {

            const reg = await models.Receta.findByIdAndUpdate(id,
                body,
                {new:true});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error' + e
            });
            next(e);
        }
    },
}