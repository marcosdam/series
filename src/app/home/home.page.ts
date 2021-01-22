import {Component} from '@angular/core';
import {DatosService} from '../servicios/datos.service';
import {Serie} from '../../../../frontend/src/app/models/serie';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    series?: Observable<Serie>;

    constructor(datosService: DatosService) {
        // @ts-ignore
        this.series = datosService.getSeries();
    }

}
