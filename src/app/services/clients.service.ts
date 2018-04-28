import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService {
  url:string = 'http://localhost:8000'

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
