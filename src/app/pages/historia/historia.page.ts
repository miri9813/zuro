import { Component, OnInit } from '@angular/core';
import { Personajes, RespuestaBD } from 'src/app/componentes/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
<<<<<<< HEAD
  standalone:false,

=======
>>>>>>> be085d94f53fdaa5b16e15bf25626565d446d087
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
<<<<<<< HEAD
 personajesRecientes: Personajes[] = [];
  

  constructor(private servicioPersonajes: PersonajesService) {}

   ngOnInit() {
      this.servicioPersonajes.getConsole().subscribe(
        (resp: RespuestaBD) => {
          console.log('Respuesta de Firebase:', resp);
          if (resp && resp.Personajes && resp.Personajes.hostoria) {
            this.personajesRecientes = resp.Personajes.hostoria;  
          } else {
            console.error('No se encontraron controles');
          }
        },
        (error) => {
          console.error('Error al obtener personajes', error);
        }
      );
    }

=======
  personajesRecientes: Personajes[] = [];

  constructor(private servicioPersonajes: PersonajesService) {}

  ngOnInit() {
    this.servicioPersonajes.getConsole().subscribe(
      (resp: RespuestaBD) => {
        console.log('Respuesta de Firebase:', resp);
        if (resp && resp.Personajes && resp.Personajes.hostoria) {
          this.personajesRecientes = resp.Personajes.hostoria;
        } else {
          console.error('No se encontraron personajes');
        }
      },
      (error) => {
        console.error('Error al obtener personajes', error);
      }
    );
  }
>>>>>>> be085d94f53fdaa5b16e15bf25626565d446d087
}
