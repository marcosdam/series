import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  // CATEGORÍAS
  //
  // Thriller
  {
    path: 'thriller',
    loadChildren: () => import('./home/paginas/thriller/thriller.module').then( m => m.ThrillerPageModule)
  },
  // Drama
  {
    path: 'drama',
    loadChildren: () => import('./home/paginas/drama/drama.module').then( m => m.DramaPageModule)
  },
  // Scifi
  {
    path: 'scifi',
    loadChildren: () => import('./home/paginas/scifi/scifi.module').then( m => m.ScifiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
