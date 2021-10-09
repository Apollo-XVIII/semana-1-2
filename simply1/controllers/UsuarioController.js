const models = require('../models');
var bcrypt = require('bcryptjs');
const token = require('../services/token');

module.exports = {
    add: async(req, res, next) => {
        try {

            //Hacer las validaciones para adicionar un nuevo usuario

            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    login: async(req, res, next) => {
        try {
            console.log(req.body.correo)
            let usuario = await models.usuario.findOne({where: { correo: req.body.correo } });
            if(usuario) {
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
        const id = req.params.id;
        const body = req.body;

        try {

            const reg = await models.Usuario.findByIdAndUpdate(id,
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
    activate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.update({ activo: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.update({ activo: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}