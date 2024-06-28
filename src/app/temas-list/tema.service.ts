import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Tema, TemaPage } from '../interfaces/tema.interface';

@Injectable({
  providedIn: 'root'
})
export class TemaService implements OnInit {

  constructor(
    private http:HttpClient
  ) {}


  ngOnInit(): void {
    
  }


  paginate(){
    return this.http.get<TemaPage>('http://localhost:8080/api/topicos');
  }

  create(tema: Tema){
    return this.http.post<Tema>('http://localhost:8080/api/topicos', tema);
  }

  get(id:number){
    return this.http.get<Tema>(`http://localhost:8080/api/topicos/${id}`);
  }

  delete(tema: Tema){
    return this.http.delete(`http://localhost:8080/api/topicos/${tema.id}`);
  }

}
