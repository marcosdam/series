import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {MenuComponent} from './menu/menu.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



@NgModule({
  // Declarar los componentes Cabecera y Menú
  declarations: [CabeceraComponent, MenuComponent],
  // Añadir el exports con ellos
  exports: [CabeceraComponent, MenuComponent, FormsModule],
  // Importar aquí los módulos IonicModule y RouterModule
  imports: [
    CommonModule, IonicModule, RouterModule, FormsModule
  ]
})
export class ComponentesModule { }
