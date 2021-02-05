import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from '../../../interfaces/serie';
import {IonInfiniteScroll} from '@ionic/angular';
import {DatosService} from '../../../servicios/datos.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drama',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  // Var titulo que nos traerá la cabecera
  titulo: string;

  // Series
  series: Serie[];

  // Para acceder a elementos del HTML desde typescript usamos @ViewChild
  @ViewChild(IonInfiniteScroll, {static: false}) ionInfiniteScroll: IonInfiniteScroll;
  data: any[] = Array(4); // lista

  constructor(private datosService: DatosService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  // Obtener las series de esa categoría
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.cat);
    if (params.cat){
      this.datosService.getSeriesPorCategoria(params.cat)
          .subscribe( res => {
            this.series = res as Serie[];
            console.log(res);
          }, error => console.error(error));
    }
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
