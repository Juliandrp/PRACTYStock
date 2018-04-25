import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VentasService {
  url:string = 'https://practy-project.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  tokenizer():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/login`)
        .subscribe(token => {
          resolve(token)
        },err => {
          reject(err);
        })
    })
  }

  sold(token,data):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/ventas`,token+data)
        .subscribe(resp => {
          resolve(resp);
        },err => {
          reject(err);
        })
    })
  }
}
