const models = require('../models');

module.exports = {
    add: async(req, res, next) => {
        try {

            //Hacer las validaciones para adicionar una nueva receta
            const reg = await models.Receta.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
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
        try {
            let valor = req.query.nombre;
            let id = req.body._id;
            let checkNombre = await models.Receta.findOne( { nombre: valor } )
            if(!checkNombre) {
                const reg = await models.Receta.findByIdAndUpdate( { _id: id },
                                                                    { descripcion: req.body.descripcion } );
                res.status(200).json(reg);
            } else {
                res.status(500).send({
                    mensaje: 'La receta no existe ' + e
                });
            }   
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },

    remove: async(req, res, next) => { 
        try {

            let id = req.body._id;

            const reg = await models.Receta.findByIdAndDelete( { _id: id } );
            res.status(200).json(reg);
 
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },

}