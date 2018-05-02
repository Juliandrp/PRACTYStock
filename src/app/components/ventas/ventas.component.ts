import { ClientsService } from './../../services/clients.service';
import { LocationService } from './../../services/location.service';
import { VentasService } from './../../services/ventas.service';
import { Component, OnInit, Input } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  precios;
  client;
  cedula1;
  nombre;
  barrio;
  telefono;
  direccion;
  @Input() cedula;
  locacion;
  municipios
  id_vendedor;
  products;
  model;
  imei;
  mensaje = 'Cliente no registrado?';
  @Input() venta:any = {
    numFactura: '',
    cedula: '',
    nomCompleto: '',
    telefono: '',
    direccion: '',
    barrio: '',
    departamento: '',
    ciudad: '',
    dispositivo: '',
    precio:'',
    imei: ''
  };
  
  constructor(
    private service:VentasService,
    private _toast:MzToastService,
    private _locate:LocationService,
    private _product:ProductService,
    private _client:ClientsService
  ) { 
    

  }

  ngOnInit() {
    this.getLocation();
    this.getProduct();
  }

  find():void {
    
    this._client.findClient(this.venta.cedula)
      .then(data => {
        this.client = data;
        if(this.client.length == 1) {
          this.mensaje = 'Cliente';
          console.log(this.client);
          this.venta.cedula = data[0].cedula;
          this.venta.direccion = this.client[0].direccion;
          this.venta.nomCompleto = this.client[0].nombre_completo;
          this.venta.barrio = this.client[0].barrio;
          this.venta.telefono = this.client[0].telefono;
          this._toast.show('Cliente registrado!',4000,'black');
        }else {
          this._toast.show('Cliente no registrado!',4000,'black');
        }
      }).catch(err => {
        console.log(err);
        this._toast.show(JSON.stringify(err),4000,'black');
      })
  }

  getModelP():void {
    for(let arr in this.products) {
      if(this.venta.model === this.products[arr].desc) {
        this.model =this.products[arr].modelo;
        //console.log(this.products[]);
      }
    }
  }

  getMunicipal():void {
    for(let arr in this.locacion) {
      if(this.venta.departamento === this.locacion[arr].nombre) {
        this.municipios = this.locacion[arr].municipios;
      }
    }
  }
  getPrice() {
    for(let arr in this.model){
      
    
        this.precios += this.model[arr].precio;
  
      }
    
  }

  getProduct():void {
    this.id_vendedor = localStorage.getItem('id_user');
    this._product.getProducts(this.id_vendedor)
      .then(data => {
        //console.log(data);
        this.products = data.map(e => {return e.marca});
        this.products = Array.from(new Set(this.products));
        this.model = data.map(e => e.modelo);
        this.imei = data;
        this.precios =this.model.map(e => {return e.precio } )
        //console.log(this.products)
      }).catch( err => {
        this._toast.show(JSON.stringify(err),4000,'black');
      });
  }

  getLocation():void {
    this._locate.getLocation()
      .then( data => {
        this.locacion = data;
        //console.log(this.locacion);
      }).catch(err => {
        console.log(err);
        //this._toast.show(err,4000,'black');
      })
  }

  postVentas():void {
    this.id_vendedor = localStorage.getItem('id_user');
    this.service.sold(`num_factura=${this.venta.numFactura}&cedula=${this.venta.cedula}&nombre=${this.venta.nomCompleto}&telefono=${this.venta.telefono}&direccion=${this.venta.direccion}&barrio=${this.venta.barrio}&departamento=${this.venta.departamento}&ciudad=${this.venta.ciudad}&marca=${this.venta.marca}&modelo=${this.venta.modelo}&precio=${this.venta.precio}&precio_factura=${this.venta.precio_factura}&imei=${this.venta.imei}&id_user=${this.id_vendedor}`).
      then(data => {
        this._toast.show('Registro exitoso!',400,'black');
        this.venta = [];
      }).catch(err => {
        this._toast.show(<string>err,4000,'black');
      });
  }
}
