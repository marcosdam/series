const mongoose = require('mongoose');   // Traer módulo mongoose
const {Schema} = mongoose;    // Traer esquema de mongoose

// Definir esquema
const serieSchema = ({

    imagen1: {type: String, required:true},
    imagen2: {type: String, required:true},
    imagen3: {type: String, required:true},
    titulo: {type: String, required:true},
    categorias: [{type: String, required:true}],
    numCapitulos: {type: Number, required:true},
    anyoEmision: {type: Number, required:true},
    sinopsis: {type: String, required:true},
    puntuacion: {type: Number, required:true}
});


module.exports = mongoose.model('Movie', serieSchema, 'APISeriesMongoose');
