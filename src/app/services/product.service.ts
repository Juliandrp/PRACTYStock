import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  url:string = 'http://localhost:8000'

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
