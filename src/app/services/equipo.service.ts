import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EquipoService {
  url:string = 'practy-project.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  getEquipos():Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/productos`)
        .subscribe( data => resolve(data),err => reject(err));
    });
  }

  getEquipo(id):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.get(`${this.url}/productos/${id}`)
        .subscribe( data => resolve(data),err => reject(err));
    })
  }
}
