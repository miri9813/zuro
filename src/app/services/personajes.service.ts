import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaBD } from '../componentes/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = 'https://zoru-f4458-default-rtdb.firebaseio.com/.json';

  constructor(private http: HttpClient) {}

  // Definimos la función fuera del constructor
  getDatos(): Observable<RespuestaBD> {
    return this.http.get<RespuestaBD>(this.url);
  }
  getConsole(): Observable<RespuestaBD> {
    return this.http.get<RespuestaBD>(this.url);
  }
}
