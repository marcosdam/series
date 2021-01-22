import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Elemento} from '../interfaces/interfaces';
import {Serie} from '../../../../frontend/src/app/models/serie';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // Serie y lista de series (IMPORTAR serie.ts de models de /frontend
  selectedSerie: Serie;
  series: Serie[];

  // URL de la API
  readonly API_SERIES = 'http://localhost:3000/api/series';

  // Inyectar HttpClient en el constructor del servicio (además de para el .json, porque más adelante obtendré los datos de una api real)
  constructor(private http: HttpClient) {
    // Iniciar serie
    this.selectedSerie = new Serie();
  }

  // MENÚ -> Función para obtener el array de objetos de menu.json
  getMenuOpciones(){
    return this.http.get<Elemento[]>('/assets/data/menu.json');
  }

  // Función para obtener la lista de series de serie.json
  /*getSeries(){
    return this.http.get<Serie[]>('/assets/data/serie.json');
  }*/

  // Func para obtener series con GET (Petición HTTP)
  getSeries(){
    return this.http.get(this.API_SERIES);
  }
}
