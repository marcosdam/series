import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DramaPageRoutingModule } from './drama-routing.module';

import { DramaPage } from './drama.page';
import {ComponentesModule} from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DramaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DramaPage]
})
export class DramaPageModule {}
