import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioPage } from '../interfaces/usuairo.interface';

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

}
