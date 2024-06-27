import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { TemaPage } from '../interfaces/tema.interface';

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

}
