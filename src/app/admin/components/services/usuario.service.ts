import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioPage } from '../../../interfaces/usuairo.interface';

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

  get(id: number){
    return this.http.get<Usuario>(`http://localhost:8080/api/usuario/${id}`);
  }

  create(usuario: Usuario){
    return this.http.post<Usuario>('http://localhost:8080/api/usuario', usuario);
  }

  update(id: number , usuario: Usuario){
    return this.http.put(`http://localhost:8080/api/usuario/${id}`, usuario);
  }


  delete(usuario: Usuario){
    return this.http.delete(`http://localhost:8080/api/usuario/${usuario.id}`);
  }

  uploadFile(formData: FormData){
    return this.http.post('http://localhost:8080/api/media/upload', formData);
  }

}
