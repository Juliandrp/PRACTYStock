import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VentasService {
  url:string = 'practy-project.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  vender(data):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/ventas`,data)
        .subscribe( resp => {
          resolve(resp);
        },err => reject(err));
    })
  }

  getVentas(id):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/ventas/${id}`)
        .subscribe( 
          data => resolve(data)
          ,err => reject(err));
    })
  }

  getAllVentas():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/ventas`)
        .subscribe(
          data => resolve(data),
          err => reject(err)
        )
    })
  }

}
