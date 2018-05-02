import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
<<<<<<< HEAD
  url:string = localStorage.getItem('url');
=======
  url:string = 'http://192.168.0.200:8000';
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db

  constructor(
    private http:HttpClient
  ) { }

  getProducts(id):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/api/productos/${id}`)
        .subscribe( data => {
          resolve(data);
        },err=> {
          reject(err);
        })
    })
  }
}
