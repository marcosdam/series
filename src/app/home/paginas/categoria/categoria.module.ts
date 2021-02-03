import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaRoutingModule,
    ComponentesModule
  ],
  declarations: [CategoriaPage]
})
export class CategoriaPageModule {}
