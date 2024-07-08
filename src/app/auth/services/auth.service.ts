import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaAutenticacion, SolicitudAutenticacion } from '../components/interfaces/auth.interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';


const authKey = 'forogoodweb_auth'; //Clave utilizada para almacenar los datos de autenticación en el localStorage.

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth?: RespuestaAutenticacion; // _auth: Propiedad privada que almacena los datos de autenticación.


  constructor(
    private http:HttpClient
  ) { 
    const authString = localStorage.getItem(authKey); //localStorage.getItem(authKey) Obtiene los datos de autenticación del localStorage si existen.
    if(authString){
      this._auth = JSON.parse(authString); //JSON.parse(authString): Convierte la cadena JSON almacenada en un objeto JavaScript y lo asigna a _auth.
    }
  }


  autenticacion(solicitudAutenticacion: SolicitudAutenticacion){
    return this.http.post<RespuestaAutenticacion>(`${environment.apiBase}/autenticacion`, solicitudAutenticacion)
    .pipe(
      map(response => {
        localStorage.setItem(authKey, JSON.stringify(response));
        this._auth = response;  //guardar los datos para el manejo de la respuesta
        return response.usuario;
      })
    );
  }

}
