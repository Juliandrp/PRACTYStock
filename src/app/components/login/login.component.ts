import { LocationService } from './../../services/location.service';
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
  location
  _token:string;
  user = {
    login:'',
    password:'',
  };
  idUser:number;
  constructor(
    private toast:MzToastService,
    private log:LoginService,
    private router:Router,
    private _locate:LocationService
  ) { }

  ngOnInit() { 
    /*if(navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(this.success,this.error,this.options);
    }*/
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  success(pos) {
    let crd = pos.coords;
    this.locacion = pos.coords;
    /*
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    */
  };

  error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  locacion;


  setPosition(position){
    this.location = position.coords;
    this.locacion = this.location;
    console.log(position)
    console.log(position.coords);
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  login():void {
    this.log.login(`login=${this.user.login}&password=${this.user.password}`)
      .then(data => {
        if(data !== 'estas credenciales no coinciden con nuestros registros'){
          localStorage.setItem('id_user',<string>data);
          this.toast.show('Bienvenid@!',4000,'black');
          this.router.navigateByUrl('/iniciando');
        }else {
          this.toast.show('Credenciales incorrectas',4000,'black');
        }
          
        
      }).catch(err => {
        //console.log(<string>err);
        this.toast.show(JSON.stringify(err), 4000, 'black');
      });
  }
  
}
