import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout((router: Router) => {
      this.router.navigate(['vendedor/home']);
  }, 3000);
  }
  

}
