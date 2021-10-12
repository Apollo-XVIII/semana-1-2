const models = require('../models');
var bcrypt = require('bcryptjs');
const token = require('../services/token');

module.exports = {
    add: async(req, res, next) => {
        try {

            let checkCorreo = await models.Usuario.findOne( {correo: req.body.correo } )

            if(! checkCorreo ) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const reg = await models.Usuario.create(req.body);
                res.status(200).json(reg);    
            } else {
                res.status(404).send ({
                    message : 'El usuario ya existe'
                })
            }

        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },
    login: async(req, res, next) => {
        try {

            let valor = req.query.valor;
            const reg = await models.Usuario.findOne( { correo: valor } );
            if(reg) {
                let match = await bcrypt.compare(req.body.password, usuario, password);
                if(match) {
                    console.log(usuario.rol);
                    let tokenReturn = await token.enconde(usuario);
                    res.status(200).json({ usuario, tokenReturn });
                } else {
                    res.status(401).send({
                        mensaje: 'Usuario o password incorrecto'
                    });
                }
            } else {
                res.status(400).send({
                    mensaje: 'Usuario no autorizado'
                })
            }
        } catch (e) {
            
        }
    },
    list: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Usuario.find();
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
            let valor = req.query.correo;
            let id = req.body._id;
            let checkCorreo = await models.Usuario.findOne( { correo: valor } )
            if(!checkCorreo) {
                const reg = await models.Usuario.findByIdAndUpdate( {_id: id },
                                                                    { nombre: req.body.nombre } );
                res.status(200).json(reg);
            } else {
                res.status(500).send({
                    mensaje: 'El correo no existe ' + e
                });
            }

        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ' + e
            });
            next(e);
        }
    },
    activate: async(req, res, next) => {

        try {

            const reg = await models.Usuario.findByIdAndUpdate( {_id: req.body._id },
                                                                { activo: true } );
            res.status(200).json(reg);


        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error' + e
            });
            next(e);
        }

    },
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate( {_id: req.body._id },
                                                                { activo: false } );
            res.status(200).json(reg);

        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error' + e
            });
            next(e);
        }
    }
}