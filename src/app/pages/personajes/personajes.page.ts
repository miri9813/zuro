import { Component, OnInit } from '@angular/core';
import { Personajes, RespuestaBD } from 'src/app/componentes/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  standalone: false,
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajesRecientes: Personajes[] = [];

  constructor(private servicioPersonajes: PersonajesService) {}

  ngOnInit() {
    this.servicioPersonajes.getDatos().subscribe(
      (resp: RespuestaBD) => {
        console.log('Respuesta de Firebase:', resp);
        // Accedemos a los personajes a través de 'Personajes.datos'
        if (resp && resp.Personajes && resp.Personajes.datos) {
          this.personajesRecientes = resp.Personajes.datos;  // Accedemos correctamente
        } else {
          console.error('No se encontraron personajes');
        }
      },
      (error) => {
        console.error('Error al obtener personajes', error);
      }
    );
  }
}
