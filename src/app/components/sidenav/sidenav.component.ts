import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  nombre:string;
  ubicacion:string;
  email:string;
  constructor(

  ) { }

  ngOnInit() {
  	this.nombre = localStorage.getItem('nombre_user');
  	this.email = localStorage.getItem('email_user');
  }

}
