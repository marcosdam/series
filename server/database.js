// Traer módulo mongoose
const mongoose = require('mongoose');

// URL server (MongoDB Atlas)
const URI = 'mongodb+srv://root:root@cluster0.t1j0m.mongodb.net/APISeriesMongoose?retryWrites=true&w=majority';

// Opciones
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

// .then -> Tod0 bien | .catch -> Capturar error
mongoose.connect(URI)
    .then(db => console.log('DB CONECTADA'))
    .catch(err => console.error(err));

// Exportar conector
module.exports = mongoose;
