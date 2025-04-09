import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
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

  constructor(private servicioPersonajes: PersonajesService,
    private modalCtrl:ModalController  ) {}
    async verDetalle(id: number){
      /*Dado que es una petición (promesa) es un proceso
      asincrono espera la respuesta del componente modal
      al recibirla se vincula con la vista de detalle */
      const modal= await this.modalCtrl.create({
      component:DetalleComponent,
      componentProps:{id}
      });
      //Se visualisa el componente de detalle
      modal.present();
      }
  ngOnInit() {
    this.servicioPersonajes.getDatos().subscribe(
      (resp: RespuestaBD) => {
        console.log('Respuesta de Firebase:', resp);
        if (resp && resp.Personajes && resp.Personajes.datos) {
          this.personajesRecientes = resp.Personajes.datos;  
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
