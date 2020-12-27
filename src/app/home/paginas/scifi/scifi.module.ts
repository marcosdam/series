import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScifiPageRoutingModule } from './scifi-routing.module';

import { ScifiPage } from './scifi.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScifiPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ScifiPage]
})
export class ScifiPageModule {}
