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
  _token:any;

  constructor(
    private service:VentasService,
    private _toast:MzToastService,
  ) { 

  }

  ngOnInit() {
    this.service.tokenizer().then(token => {
      this._token = token;
      console.log(this._token);
    }).catch( err => {
      this._token = <string>err.error.text;
      //console.error(this._token);
      //this._toast.show(this._token,4000,'black');
    });
  }

  postVentas():void {
    this.service.tokenizer().then(token => {
      this._token = token;
    }).catch( err => {
      this._toast.show(<string>err,4000,'black');
    });
    this.service.sold(this._token,this.venta).
      then(data => {
        this._toast.show(<string>data,400,'black');
      }).catch(err => {
        this._toast.show(<string>err,4000,'black');
      });
  }
}
