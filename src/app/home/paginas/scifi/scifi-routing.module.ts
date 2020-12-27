import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScifiPage } from './scifi.page';

const routes: Routes = [
  {
    path: '',
    component: ScifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScifiPageRoutingModule {}
