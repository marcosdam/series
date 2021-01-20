import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';
import {NgForm} from '@angular/forms';
import {Serie} from '../../models/serie';

// Var para utilizar Materialize
declare var M: any;

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  // Var para array categorías
  myCategoria: string;

  // Inyectar serieService en el constructor
  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries(); // Inicializar array al arrancar
  }

  // Añadir serie a la lista
  addSerie(selectedSerie: Serie, serieForm: NgForm) {
    console.log('serie', selectedSerie, 'formulario:', serieForm);
    this.serieService.postSerie(selectedSerie)
      .subscribe(res => {
        console.log('res: ', res);
        M.toast({html: 'Saved Succesful'});
        this.getSeries();
      });
  }

  addCategoria(){
    if (this.serieService.selectedSerie.categorias[0] === ''){
      this.serieService.selectedSerie.categorias.splice(0, 1);
    }
    this.serieService.selectedSerie.categorias.push(this.myCategoria); // Añadir categoría a la lista
    this.myCategoria = '';  // Reiniciar var
  }

  resetForm(serieForm?: NgForm) {
    if (serieForm) {
      serieForm.reset();
      this.serieService.selectedSerie = new Serie();  // Resetear formulario (nuevo objeto vacío para no resetear tod0)
    }
  }

  getSeries() {
    // Recoger las series de mi API
    this.serieService.getSeries()
      .subscribe(res => {
        this.serieService.series = res as Serie[];
        console.log('res: ', res);
      });
  }

  editSerie(serie: Serie) {

  }

  deleteSerie(id: string) {

  }

}
