import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Elemento} from '../../../interfaces/interfaces';
import {DatosService} from '../../../servicios/datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  // Definir array de elementos (objeto Elemento en interfaces.ts)
  elementos: Observable<Elemento[]>;

  // Inyectar el servicio (datos.service.ts) en el constructor para usar su función getMenuOpciones
  constructor(private datosService: DatosService) { }

  // Iniciar elementos con la función getMenuOpciones de datos.service.ts
  ngOnInit() {
    this.elementos = this.datosService.getMenuOpciones();
  }

}
