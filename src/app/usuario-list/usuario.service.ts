import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioPage } from '../interfaces/usuairo.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) {}


  pagiante(){
    return this.http.get<UsuarioPage>('http://localhost:8080/api/usuario');
  }

  create(usuario: Usuario){
    return this.http.post<Usuario>('http://localhost:8080/api/usuario', usuario);
  }

}
