import { Component, Input, OnInit } from '@angular/core';
import { Detalle, InfGeneral, RespuestaDetalle } from '../interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  standalone: false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: any;

  detallePersonaje = {} as Detalle;
  detalleGeneral = {} as InfGeneral;

  constructor(private detalle: PersonajesService) { }

  ngOnInit() {
    this.detalle.getDetalle(this.id).subscribe((respuesta: RespuestaDetalle) => {
      console.log('Detalle Personaje', respuesta);
      this.detallePersonaje = respuesta.datos;
      this.detalleGeneral = respuesta.support;
    });
  }
}
