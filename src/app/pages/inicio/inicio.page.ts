import { Component, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
  }
@Component({
  standalone:false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  elementos: Elemento[]=[
    { //Primer elemento de la lista
    icono: 'newspaper-outline',
    nombre:'Items',
    ruta:'/items'
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
