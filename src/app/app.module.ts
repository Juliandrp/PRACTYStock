import { ClientsService } from './services/clients.service';
import { ProductService } from './services/product.service';
import { LocationService } from './services/location.service';
import { VentasService } from './services/ventas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzSelectModule, MzToastService } from 'ng2-materialize';
import { MzButtonModule, MzInputModule } from 'ng2-materialize';
import { MzCardModule } from 'ng2-materialize'
import { MzSidenavModule } from 'ng2-materialize';
import { MzParallaxModule } from 'ng2-materialize'
import { MzToastModule } from 'ng2-materialize';
import { MzCollapsibleModule } from 'ng2-materialize'
import { MzSpinnerModule } from 'ng2-materialize'
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { IniciandoComponent } from './components/iniciando/iniciando.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    EquiposComponent,
    HomeComponent,
    IniciandoComponent
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
   MzCollapsibleModule,
   MzSpinnerModule,
   HttpClientModule,
   FormsModule
  ],
  providers: [
    HttpClient,
    MzToastService,
    VentasService,
    LoginService,
    LocationService,
    ProductService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
