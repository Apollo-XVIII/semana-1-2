import mongoose from 'mongoose';
const { Schema } = mongoose;

const recetaSchema = new Schema({
    
    nombre: {
        type: String,
        length: 50,
        required: [true, 'Nombre obligatorio']
    }, 

    descripcion: {
        type: String,
        length: 50,
        required: [true, 'Descrpción obligatoria']
    },

    ingredientes: {
        type: String,
        length: 50,
        required: [true, 'Ingredientes obligatorios']
    },

    preparacion: {
        type: String,
        length: 50,
        required: [true, 'Pasos obligatorios']
    },

    dateAt: {
        type: Date,
        default: Date.now
    }
})

//Convertir a modelo
const Receta = mongoose.model('Receta', recetaSchema);
module.exports = Receta;
