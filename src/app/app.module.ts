import { VentasService } from './services/ventas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzSelectModule, MzToastService } from 'ng2-materialize';
import { MzButtonModule, MzInputModule } from 'ng2-materialize';
import { MzCardModule } from 'ng2-materialize'
import { MzSidenavModule } from 'ng2-materialize';
import { MzParallaxModule } from 'ng2-materialize'
import { MzToastModule } from 'ng2-materialize';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    EquiposComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzSidenavModule,
    MzButtonModule,
    MzParallaxModule,
   MzInputModule,
   MzSelectModule,
   MzCardModule,
   MzToastModule,
   HttpClientModule
  ],
  providers: [
    HttpClient,
    MzToastService,
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
