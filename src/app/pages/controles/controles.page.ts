import { Component, OnInit } from '@angular/core';
import { Personajes, RespuestaBD } from 'src/app/componentes/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  standalone:false,
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {
    personajesRecientes: Personajes[] = [];
  

  constructor(private servicioPersonajes: PersonajesService) {}

   ngOnInit() {
      this.servicioPersonajes.getConsole().subscribe(
        (resp: RespuestaBD) => {
          console.log('Respuesta de Firebase:', resp);
          if (resp && resp.Personajes && resp.Personajes.controles) {
            this.personajesRecientes = resp.Personajes.controles;  
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
