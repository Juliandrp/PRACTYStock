import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Venta } from '../../types/ventas.data';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  venta:any;
  _token:any;

  constructor(
  
  ) { }

  ngOnInit() {
  }

}
