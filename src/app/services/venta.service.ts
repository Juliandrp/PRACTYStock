import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VentaService {
  url:string = 'practy-project.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  sold(token,data) {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/ventas`,token+data)
        .subscribe( resp => {
          resolve(resp);
        },err => {
          reject(err);
        })
    });
  }

  getVentas(id) {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/venta/${id}`)
        .subscribe( data => {
          resolve(data);
        },err => {
          reject(err);
        })
    })
  }
}
