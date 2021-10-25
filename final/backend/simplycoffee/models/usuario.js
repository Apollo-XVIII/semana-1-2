import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    
    nombre: {
        type: String,
        length: 100,
        required: [true, 'Nombre obligatorio']
    }, 
    correo: {
        type: String,
        required: [true, 'E-mail obligatorio']
    },
    password: {
        type: String,
        length: 10,
        required: [true, 'Contraseña obligatoria']
    },
    activo: {
        type: Boolean,
        default: true
    },
    dateAt: {
        type: Date,
        default: Date.now
    }
})

//Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
