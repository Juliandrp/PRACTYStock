import { VentasService } from './../../services/ventas.service';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Venta } from '../../types/ventas.data';
import { MzToastService } from 'ng2-materialize';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  venta:any;
  
  constructor(
    private service:VentasService,
    private _toast:MzToastService,
  ) { 

  }

  ngOnInit() {
  }

  postVentas():void {
    this.service.sold(this.venta).
      then(data => {
        this._toast.show(<string>data,400,'black');
      }).catch(err => {
        this._toast.show(<string>err,4000,'black');
      });
  }
}
