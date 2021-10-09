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

    Preparacion: {
        type: String,
        length: 50,
        required: [true, 'Pasos obligatorios']
    },

    URL: {
        type: String,
        length: 50,
        required: [true, 'Pasos obligatorios']
    },

    imagen_id: {
        type: Number,
    },

    activo: {
        type: Boolean,
    },

    receta_id: {
        type: Number,
    },

    dateAt: {
        type: Date,
        default: Date.now
    }
})

//Convertir a modelo
const Receta = mongoose.model('Receta', recetaSchema);
module.exports = Receta;
