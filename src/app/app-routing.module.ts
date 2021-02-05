import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SerieComponent} from './home/componentes/serie/serie.component';
// Añadir en este array todas las rutas a todas las páginas
const routes: Routes = [
  // Página principal (home)
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // SERIE
  {
    path: 'serie/:id',
    component: SerieComponent
  },

  // CATEGORÍA
  //
  {
    path: 'serie/categorias/:cat',
    // component: SerieComponent
    loadChildren: () => import('./home/paginas/categoria/categoria.module').then(m => m.CategoriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
