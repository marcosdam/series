const express = require('express');     // Traer módulo express
const router = express.Router();    // Traer Router de exprees
const movieCtrl = require('../controllers/serieController');


// Routes
router.get('/', movieCtrl.getSeries);   // GET todas las series
router.post('/', movieCtrl.createSerie);    // POST una serie
router.get('/:id', movieCtrl.getOneSerie); // GET una sola serie (:id -> con 2 puntos)
router.put('/:id', movieCtrl.updateSerie); // PUT una serie (actualizar)
router.delete('/:id', movieCtrl.deleteSerie); // DELETE una serie


module.exports = router;
