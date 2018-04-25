import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  url:string = 'https://practy-project.herokuapp';
  constructor(
    private http:HttpClient
  ) { }

  tokenizer():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/login`)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  login(token,data) {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/login`,token+data)
      .subscribe(resp => {
        resolve(resp);
      },err => {
        reject(err);
      })
    })
  }
}
