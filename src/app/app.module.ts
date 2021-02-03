import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ComponentesModule} from './home/componentes/componentes.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DatosService} from './servicios/datos.service';
import {SerieComponent} from './home/componentes/serie/serie.component';

@NgModule({
  declarations: [AppComponent, SerieComponent],
  entryComponents: [],
  // Importar aquí HttpClientModule y ComponentesModule (contiene el Header y Menú común a todas las páginas)
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentesModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
