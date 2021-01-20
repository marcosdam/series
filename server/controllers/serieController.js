const Serie = require('../models/serieModel');

const serieCtrl = {};


// Func getSeries (Request & Response)
serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()   // Devuelve todas las series y las guarda en const series (como select en Mongo)
        .catch((err) => {
            console.error(err);
        });
    res.json(series);
};

// Func createSerie (Request & Response)
serieCtrl.createSerie = async (req, res) => {
    const serie = new Serie({
        imagen1: req.body.imagen1,
        imagen2: req.body.imagen2,
        imagen3: req.body.imagen3,
        titulo: req.body.titulo,
        categorias: req.body.categorias,
        numCapitulos: req.body.numCapitulos,
        anyoEmision: req.body.anyoEmision,
        sinopsis: req.body.sinopsis,
        puntuacion: req.body.puntuacion,
    });
    await serie.save()
        .catch((err) => {
            console.error(err);
        });
    res.json({'status': 'Serie insertada correctamente'});
};

// Func getOneSerie (Request & Response)
serieCtrl.getOneSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)   // Guardo el resultado de la consulta a la BD
        .catch((err) => {   // Si hay error, sácalo por consola
            console.log(err);
        });
    res.json(movie);    //Si no hay error devuelve la serie en formato .json
};

// Func updateSerie (Request & Response)
serieCtrl.updateSerie = async (req, res) => {
    const serie = {
        imagen1: req.body.imagen1,
        imagen2: req.body.imagen2,
        imagen3: req.body.imagen3,
        titulo: req.body.titulo,
        categorias: req.body.categorias,
        numCapitulos: req.body.numCapitulos,
        anyoEmision: req.body.anyoEmision,
        sinopsis: req.body.sinopsis,
        puntuacion: req.body.puntuacion,
    };
    // Una vez tengo los datos que quiero actualizar -> serie.findById
    await Serie.findByIdAndUpdate(req.params.id, {$set: serie}, {new: true});
    res.json({status: 'Serie actualizada'});
};

// Func deleteSerie (Req & Res)
serieCtrl.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .catch((err) => {
            console.error(err);
        });
    res.json({satatus: 'Serie borrada'});
};

module.exports = serieCtrl;
