import {Component, OnInit} from '@angular/core';
import {Serie} from '../../../interfaces/serie';
import {DatosService} from '../../../servicios/datos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

// Var para utilizar Materialize
declare var M: any;

@Component({
    selector: 'app-series',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {
    // Form
    puntuacionForm: NgForm;

    // Serie
    serie: Serie = {
        _id: '',
        imagen1: '',
        imagen2: '',
        imagen3: '',
        titulo: '',
        categorias: [''],
        numCapitulos: 0,
        anyoEmision: 0,
        sinopsis: '',
        puntuaciones: [{email: '', nota: 0}]
    };

    // Objeto puntuacion (enviado desde ionic al votar con email válido)
    puntuacion = {
        email: '',
        nota: 0
    };

    // Vars para array puntuaciones
    myPuntuaciones = [{ email: '', nota: 0}];

    // Media para actualizar
    media = 0;

    // Inyectar datosService(contiene getOneSrie), Router y ActivatedRoute (coger los parámetros de la url -> donde pasamos el id)
    constructor(public datosService: DatosService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    // Iniciar la serie y su puntuación (media de puntuaciones)
    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        if (params.id) {    // Si la serie existe, la edito (añado la puntuación a su lista)
            this.datosService.getOneSerie(params.id)    // Cargar mediante su id la serie pulsada antes (en home o categoria)
                .subscribe(res => {
                    this.serie = res as Serie;
                },
                    err => console.error(err));
            }
        }

    // Añadir y Actualizar puntuación en la lista puntuaciones(email y nota)
    addPuntuacion(selectedSerie: Serie, puntuacionForm: NgForm) {
        // Si la lista de puntuaciones no está vacía, la actualizo, si no la creo (nueva)
        if (this.serie.puntuaciones.length > 0) {
            this.serie.puntuaciones.push(this.puntuacion);
            this.datosService.putSerie(this.serie)
                .subscribe(res => {
                    this.resetForm(puntuacionForm);
                    // Toast({html: 'Guardado con éxito'});
                    this.datosService.getPuntuaciones(this.serie._id); // ACTUALIZAR la lista de puntuaciones
                });
        }
    }

    // *Para el ion-range (nota del 1 al 10)    ->      Obtener su valor y añadirlo
    cambiarRango(event: any) {
        this.myPuntuaciones.push(this.puntuacion);  // Añade objeto puntuación a la lista

        // this.media = this.datosService.getPuntuaciones(this.serie._id);
    }

    // Resetear formulario una vez enviada la puntuación
    resetForm(puntuacionForm?: NgForm) {
        if (puntuacionForm) {
            puntuacionForm.reset();
        }
    }

    // Actualizar la serie tras añadir puntuación ???
}
