import {Component, OnInit, ViewChild} from '@angular/core';
import {DatosService} from '../servicios/datos.service';
import {Serie} from '../../../../frontend/src/app/models/serie';
import {Observable} from 'rxjs';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

    series?: Observable<Serie>;

    constructor(datosService: DatosService) {
        // @ts-ignore
        this.series = datosService.getSeries();     // Todas las series en home
    }

    ngOnInit() {

    }

}
