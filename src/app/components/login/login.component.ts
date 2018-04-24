import { Usuario } from './../../types/usuario.data';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MzToastService } from 'ng2-materialize';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connect:any;
  user:Usuario;
  constructor(
    private log:UserService,
    private token:MzToastService
  ) { }

  ngOnInit() {
  }

  isLogged():boolean {
    this.log.login(this.user).then(data => this.connect=data)
      .catch(err => this.token.show(err.error,4000,'black'));
    return (this.connect) ? true : false;
  }
}
