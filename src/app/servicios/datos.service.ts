import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Elemento} from '../interfaces/interfaces';
import {Serie} from '../interfaces/serie';
import {map} from "rxjs/operators";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

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

  // Func para obtener series con GET (Petición HTTP)
  getSeries(){
    return this.http.get<Serie[]>(this.API_SERIES);
  }

  /*
  getSeriesPorFecha(){
    return this.http.get(this.API_SERIES).pipe(
        map(this.series.sort(
            (s1: Serie, s2: Serie) =>
                compareNumbers(s1.anyoEmision, s2.anyoEmision))
        )
    );
  }
  */

  // Func para obtener una sola seria mediante su _id
  getOneSerie(_id: string){
    return this.http.get(this.API_SERIES + `/${_id}`);
  }

  //
  putSerie(serie: Serie){
    return this.http.put(this.API_SERIES + `/${serie._id}`, serie);
  }

  // Obtener lista de puntuaciones
  getPuntuaciones(_id: string){}

  // Obtener la media de puntuaciones y mostrarla en el badge
  getPuntuacionMedia(_id: string){

  }
}
