import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  nombre:string;
<<<<<<< HEAD
  latitud;
  longitud;
  ubicacion:string;
  email:string;
=======
  ubicacion:string;
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db
  constructor(

  ) { }

  ngOnInit() {
<<<<<<< HEAD
  	this.nombre = localStorage.getItem('nombre_user');
  	this.email = localStorage.getItem('email_user');
    this.latitud = localStorage.getItem('lat');
    this.longitud = localStorage.getItem('lng');
=======
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db
  }

}
