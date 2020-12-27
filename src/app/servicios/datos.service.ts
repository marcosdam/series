import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Elemento} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // Inyectar HttpClient en el constructor del servicio (además de para el .json, porque más adelante obtendré los datos de una api real)
  constructor(private http: HttpClient) { }
  // Función para obtener el array de objetos de menu.json
  getMenuOpciones(){
    return this.http.get<Elemento[]>('/assets/data/menu.json');
  }
}
