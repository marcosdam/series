import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from '../../../interfaces/interfaces';
import {DatosService} from '../../../servicios/datos.service';

@Component({
  selector: 'app-series',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {

  // Definir array de serie (objeto Serie en interfaces.ts)
  series: Observable<Serie[]>;

  // Inyectar el servicio (datos.service.ts) en el constructor para usar su función getSeries
  constructor(private datosService: DatosService) { }

  // Iniciar elementos con la función getSerieses de datos.service.ts
  ngOnInit() {
    // @ts-ignore
    this.series = this.datosService.getSeries();
  }

}
