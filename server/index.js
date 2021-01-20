const express = require('express'); // Inicializar módulo express
const cors = require('cors');   // Cors para COMUNICAR los distintos servers
const morgan = require('morgan');   // Morgan para saber por consola demandas del usuario en cada petición
const app = express();  // Ejecución del módulo express guardado en la constante
const {mongoose} = require('./database') // Traer el módulo mongoose

// Configurar express
app.set('port', process.env.PORT || 3000);  // Declarar puerto (cogerá el puerto por defecto del server, y si no, el 3000)

// Middlewares (Intermediarios -> cors, morgan, etc)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/series', require('./routes/serieRoute'));



// Iniciar el server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
