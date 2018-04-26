import { Usuario } from './../../types/usuario.data';
import { Component, OnInit, Input  } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { LoginService } from '../../services/login.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


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
    private log:LoginService,
    private router:Router
  ) { }

  ngOnInit() {
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
    this.log.login(`login=${this.user.login}&password=${this.user.password}`)
      .then(data => {
        if(data === 'credenciales correctas'){
          this.router.navigateByUrl('/vendedor/home');
          this.toast.show(<string>data,4000,'black');
        }
          console.log(data);
          this.toast.show(<string>data,4000,'black');
        
      }).catch(err => {
        console.log(<string>err);
        this.toast.show(<string>err, 4000, 'black');
      });
  }
  
}
