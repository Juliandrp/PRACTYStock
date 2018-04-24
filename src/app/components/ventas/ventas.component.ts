import { getTestBed } from '@angular/core/testing';
import { VentasService } from './../../services/ventas.service';
import { Component, OnInit } from '@angular/core';
import { Venta } from '../../types/ventas.data';
import { UserService } from '../../services/user.service';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  venta:Venta;
  _token:any;

  constructor(
    private service:VentasService,
    private _tokenService:UserService,
    private toast:MzToastService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  vender():void {
    this.service.vender(this._token+this.venta)
      .then( data => this.toast.show(data.mensaje, 4000, 'black'))
      .catch( err => this.toast.show(err.error,4000, 'black'));
  }

  getToken():void {
    this._tokenService.getToken()
      .then( data => this._token = data)
      .catch(
        err => this.toast.show(err.mensaje,4000, 'black')
      );
  }
}
