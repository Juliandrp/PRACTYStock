import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  url:string = 'practy-project.herokuapp.com';
  _token:string;

  constructor(
    private http: HttpClient
  ) { 
    this.getToken().then( data => {
      this._token = data;
    }).catch(err=>console.log(err));
  }

  getToken():Promise<any> {
    return new Promise( (resolve,reject) => {
      this.http.get(this.url)
        .subscribe( data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

  login(data):Promise<any> {
    return new Promise( (resolve,reject) => {
      this.http.post(`${this.url}/login`,data)
        .subscribe( resp => {
          resolve(resp);
        }, err => {
          reject(err);
        })
    });
  }

  logout():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post(`${this.url}/logout`,this._token)
        .subscribe( data => {
          resolve(data);
        },err => reject(err));
    })
  }
}
