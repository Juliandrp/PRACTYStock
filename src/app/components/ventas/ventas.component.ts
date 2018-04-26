import { VentasService } from './../../services/ventas.service';
import { Component, OnInit, Input } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  id_vendedor;
  venta:any = {
    numFactura: '',
    cedula: '',
    nomCompleto: '',
    telefono: '',
    direccion: '',
    barrio: '',
    departamento: '',
    ciudad: '',
    dispositivo: '',
    imei: ''
  };
  
  constructor(
    private service:VentasService,
    private _toast:MzToastService,
  ) { 

  }

  ngOnInit() {
  }

  postVentas():void {
    this.service.sold(`
    numFactura=${this.venta.numFactura}&cedula=${this.venta.cedula}
    &nomCompleto=${this.venta.nomCompleto}&telefono=${this.venta.telefono}
    &direccion=${this.venta.direccion}&barrio=${this.venta.barrio}
    &departamento=${this.venta.departamento}&ciudad=${this.venta.ciudad}
    &imei=${this.venta.imei}&id_user=${this.id_vendedor}
    `).
      then(data => {
        this._toast.show(<string>data,400,'black');
      }).catch(err => {
        this._toast.show(<string>err,4000,'black');
      });
  }
}
