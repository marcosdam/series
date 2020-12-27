import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'drama',
    loadChildren: () => import('./paginas/drama/drama.module').then( m => m.DramaPageModule)
  },
  {
    path: 'scifi',
    loadChildren: () => import('./paginas/scifi/scifi.module').then( m => m.ScifiPageModule)
  },
  {
    path: 'thriller',
    loadChildren: () => import('./paginas/thriller/thriller.module').then( m => m.ThrillerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
