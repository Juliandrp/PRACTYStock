import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzSelectModule } from 'ng2-materialize';
import { MzButtonModule, MzInputModule } from 'ng2-materialize';
import { MzCardModule } from 'ng2-materialize'
import { MzSidenavModule } from 'ng2-materialize';
import { MzParallaxModule } from 'ng2-materialize'
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { EquiposComponent } from './components/equipos/equipos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    EquiposComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
