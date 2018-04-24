import { Usuario } from './../../types/usuario.data';
import { Component, OnInit } from '@angular/core';
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
    private token:MzToastService
  ) { }

  ngOnInit() {
  }

}
