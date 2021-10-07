import mongoose from 'mongoose';
const { Schema } = mongoose;

const preparacionSchema = new Schema({
    
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
const Preparacion = mongoose.model('Preparacion', preparacionSchema);
module.exports = Preparacion;
