import { Component, Input, OnInit } from '@angular/core';
import { Detalle, InfGeneral, RespuestaDetalle } from '../interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
<<<<<<< HEAD
  standalone:false,
=======
  standalone: false,
>>>>>>> be085d94f53fdaa5b16e15bf25626565d446d087
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
<<<<<<< HEAD
export class DetalleComponent  implements OnInit {
  //Generamos un input para cecibir el id
@Input() id:any;
//Declaramos los objetos que almacenarán el detalle recuperado
detallePersonaje={} as Detalle;
detalleGeneral={} as InfGeneral;

  constructor(private detalle:PersonajesService) { }

  ngOnInit() {
    this.detalle.getDetalle(this.id)
.subscribe((respuesta: RespuestaDetalle)=>{
console.log('Detalle Personaje', respuesta)
this.detallePersonaje=respuesta.datos;
this.detalleGeneral=respuesta.support;
});
  }

=======
export class DetalleComponent implements OnInit {
  //Generamos un input para recibir el id
  @Input() id: any;
  //Declaramos los objetos que almacenarán el detalle recuperado
  detallePersonaje = {} as Detalle;
  detalleGeneral = {} as InfGeneral;

  constructor(private detalle: PersonajesService) { }

  ngOnInit() {
    this.detalle.getDetalle(this.id)
      .subscribe((respuesta: RespuestaDetalle) => {
        console.log('Detalle Personaje', respuesta);
        this.detallePersonaje = respuesta.datos;
        this.detalleGeneral = respuesta.support;
      });
  }
>>>>>>> be085d94f53fdaa5b16e15bf25626565d446d087
}
