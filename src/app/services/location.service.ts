import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LocationService {
  url:string = '192.168.0.200:8000';
  constructor(
    private http:HttpClient
  ) { }

  getLocation():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/api/departamentos`)
        .subscribe( data => {
          resolve(data);
        },err => {
          reject(err);
        })
    });
  }
}
