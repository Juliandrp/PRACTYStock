import { EquiposComponent } from './components/equipos/equipos.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'vendedor/venta', component: VentasComponent },
  { path: 'vendedor/home', component: HomeComponent },
  { path: 'vendedor/equipos', component: EquiposComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}