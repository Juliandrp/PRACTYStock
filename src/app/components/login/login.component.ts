import { Usuario } from './../../types/usuario.data';
import { Component, OnInit } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _token:string;
  user:Usuario;
  constructor(
    private toast:MzToastService,
    private log:LoginService
  ) { }

  ngOnInit() {
    this.log.tokenizer()
    .then(data => {
      this._token = <string>data.error.text;
    }).catch(err =>{ 
      this._token = <string>err.error.text;
      //this.toast.show(<string>err,4000,'black');
    })  
  }

  getToken():string {
    return this._token;
  }

  login():void {
    this.log.login(this.getToken(),this.user)
      .then(data => {
        this.toast.show(<string>data,4000,'black');
      }).catch(err => {
        this.toast.show(<string>err, 4000, 'black');
      });
  }
  
}
