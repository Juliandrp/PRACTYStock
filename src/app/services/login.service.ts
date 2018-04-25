import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  url:string = 'https://practy-project.herokuapp.com';
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
    const head = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    return new Promise((resolve,reject) => {
      const obj = {
        _token: token,
        login: data.login,
        password: data.password
      };
      this.http.post(`${this.url}/login`,obj,head)
      .subscribe(resp => {
        resolve(resp);
      },err => {
        reject(err);
      })
    })
  }
}
