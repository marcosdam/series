import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Serie} from '../../../interfaces/serie';
import {DatosService} from '../../../servicios/datos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AlertController, ToastController} from '@ionic/angular';

// Var para utilizar Materialize
declare var M: any;

@Component({
    selector: 'app-series',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit, AfterViewInit {
    // Serie
    serie: Serie = {
        _id: '',
        imagenes: [''],
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

    // Var para array puntuaciones
    myPuntuaciones = [{email: '', nota: 0}];

    // Media para actualizar
    suma = 0;
    media = this.getPuntuacionMedia(this.serie);
    notas = [];

    // Inyectar datosService(contiene getOneSrie), Router y ActivatedRoute (coger los parámetros de la url -> donde pasamos el id),
    // el ToastController de ionic y el AlertController para votar
    constructor(public datosService: DatosService, private router: Router, private activatedRoute: ActivatedRoute,
                private toastController: ToastController) {
    }

    // Iniciar la serie y su puntuación (media de puntuaciones)
    ngOnInit(): void {

        const params = this.activatedRoute.snapshot.params;
        if (params.id) {    // Si la serie existe, la edito (añado la puntuación a su lista)
            this.datosService.getOneSerie(params.id)    // Cargar mediante su id la serie pulsada antes (en home o categoria)
                .subscribe(res => {
                        this.serie = res as Serie;
                        console.log('SERIE: ', this.serie);
                    },
                    err => console.error(err));
        }
    }

    //
    ngAfterViewInit() {
        this.getPuntuacionMedia(this.serie);
        console.log('MEDIA:', this.media);
    }

    // Toast (de ionic)
    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Voto guardado.',
            duration: 2000
        });
        await toast.present();
    }

    // Obtener la media de puntuaciones y mostrarla en el badge
    getPuntuacionMedia(serie): number {
        // Suma las notas y divide entre tamaño de puntuaciones
        serie.puntuaciones.forEach( punt => {
            this.suma = this.suma + punt.nota;
        });
        this.media = this.suma / serie.puntuaciones.length;
        this.media = Math.round((this.media + Number.EPSILON) * 100) / 100;     // Para redondear a solo 2 decimales
        console.log('Nota media : ', this.media);

        return this.media;
    }


    // Añadir y Actualizar puntuación en la lista puntuaciones(email y nota)
    enviarFormulario(serie, puntuacionForm: NgForm) {
        // Si la lista de puntuaciones no está vacía, la actualizo, si no la creo (nueva)
        if (this.serie.puntuaciones.length > 0) {
            this.serie.puntuaciones.push(this.puntuacion);
            console.log('SERIE FORM: ', this.serie);
            this.datosService.putSerie(this.serie)
                .subscribe(res => {
                    this.resetForm(puntuacionForm);
                    this.presentToast();
                    console.log('PUNTUACIONES: ', serie.puntuaciones);
                    this.getPuntuacionMedia(this.serie); // Actualizar la media
                });
        }
    }


    // Resetear formulario una vez enviada la puntuación
    resetForm(puntuacionForm?: NgForm) {
        if (puntuacionForm) {
            puntuacionForm.reset();
        }
    }

}
