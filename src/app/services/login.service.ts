import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  url:string = 'http://192.168.0.200:8000';
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

  login(data) {
    const head = {
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return new Promise((resolve,reject) => {
  
      this.http.post(`${this.url}/api/login`, data,head)
      .subscribe(resp => {
        resolve(resp);
      },err => {
        reject(err);
      })
    })
  }
}
