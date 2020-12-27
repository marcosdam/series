import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThrillerPageRoutingModule } from './thriller-routing.module';

import { ThrillerPage } from './thriller.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThrillerPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ThrillerPage]
})
export class ThrillerPageModule {}
