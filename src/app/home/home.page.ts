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

    // Para acceder a elementos del HTML desde typescript usamos @ViewChild
    @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll: IonInfiniteScroll;
    data: any[] = Array(4); // lista

    constructor(datosService: DatosService) {
        // @ts-ignore
        this.series = datosService.getSeries();     // Todas las series en home
    }

    ngOnInit() {
    }

    // Func para cargar datos en el Infinite Scroll
    loadData(event) {
        if (this.data.length > 50) {
            event.target.complete();
            this.ionInfiniteScroll.disabled = true;
            return;
        }
        setTimeout(() => {
            const nuevoArray = Array(20);
            this.data.push(...nuevoArray);
            event.target.complete();
        }, 500);
    }

}
