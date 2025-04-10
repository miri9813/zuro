import { Component, OnInit } from '@angular/core';
import { Personajes, RespuestaBD } from 'src/app/componentes/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

interface Elemento {
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  personajesRecientes: Personajes[] = [];
  

  constructor(private servicioPersonajes: PersonajesService) {}

   ngOnInit() {
      this.servicioPersonajes.getConsole().subscribe(
        (resp: RespuestaBD) => {
          console.log('Respuesta de Firebase:', resp);
          if (resp && resp.Personajes && resp.Personajes.contenido) {
            this.personajesRecientes = resp.Personajes.contenido;  
          } else {
            console.error('No se encontraron controles');
          }
        },
        (error) => {
          console.error('Error al obtener personajes', error);
        }
      );
    }

}
