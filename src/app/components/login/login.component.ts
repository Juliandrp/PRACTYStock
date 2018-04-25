import { Usuario } from './../../types/usuario.data';
import { Component, OnInit, Input  } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { LoginService } from '../../services/login.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() cedula:string = '';
  @Input() password:string = '';
  _token:string;
  user = {
    login:'',
    password:'',
  };
  constructor(
    private toast:MzToastService,
    private log:LoginService
  ) { }

  ngOnInit() {
    this.log.tokenizer()/*
    .then(data => {
      this._token = <string>data.error.text;
    })*/.catch(err =>{
      this._token = <string>err.error.text;
    })
  }

  print():void {
    console.log({_token:this._token,
                login:this.user.login,
                password: this.user.password
              });
  }

  getToken():string {
    return this._token;
  }

  login():void {
    this.log.login(this.getToken(),this.user)
      .then(data => {
        console.log(<string>data)
        this.toast.show(<string>data,4000,'black');
      }).catch(err => {
        console.log(<string>err);
        this.toast.show(<string>err.error.message, 4000, 'black');
      });
  }
  
}
