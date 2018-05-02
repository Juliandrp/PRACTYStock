import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService {
<<<<<<< HEAD
  
  url:string = localStorage.getItem('url');
=======
  url:string = 'http://192.168.0.200:8000'
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db

  constructor(
    private http:HttpClient
  ) { }

  findClient(cedula):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/api/compradores/${cedula}`)
        .subscribe(data => {
          resolve(data);
        },err => {
          reject(err);
        })
    })
  }
}
