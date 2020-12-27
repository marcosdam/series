import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThrillerPage } from './thriller.page';

const routes: Routes = [
  {
    path: '',
    component: ThrillerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThrillerPageRoutingModule {}
