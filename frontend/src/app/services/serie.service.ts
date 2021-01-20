import { Injectable } from '@angular/core';
import {Serie} from '../models/serie';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  // Serie y Lista de series
  selectedSerie: Serie;
  series: Serie[];

  // URL de la API
  readonly URL_API = 'http://localhost:3000/api/series';

  // Inyectar protocolo HTTP en el const
  constructor(private http: HttpClient) {
    // Iniciar serie
    this.selectedSerie = new Serie();
  }

  // Funciones (GET / POST / PUT / DELETE)
  getSeries(){
    return this.http.get(this.URL_API);
  }
  postSerie(serie: Serie){
    return this.http.post(this.URL_API, serie);
  }
  putSerie(serie: Serie){
    return this.http.put(this.URL_API + `/${serie.id}`, serie);
  }
  deleteSerie(id: string){
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
