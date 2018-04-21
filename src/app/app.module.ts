import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzButtonModule, MzInputModule } from 'ng2-materialize';
import { MzSidenavModule } from 'ng2-materialize'
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MzSidenavModule,
    MzButtonModule,
   MzInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
