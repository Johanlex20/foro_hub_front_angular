import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Tema, TemaPage } from '../../../interfaces/tema.interface';

@Injectable({
  providedIn: 'root'
})
export class TemaService implements OnInit {

  constructor(
    private http:HttpClient
  ) {}


  ngOnInit(): void {
    
  }


  paginate(size: number = 5, page: number = 0){
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'createdAt,desc');

    return this.http.get<TemaPage>('http://localhost:8080/api/topicos', {params});
  }

  create(tema: Tema){
    return this.http.post<Tema>('http://localhost:8080/api/topicos', tema);
  }

  update(id: number, tema: Tema){
    return this.http.put<Tema>(`http://localhost:8080/api/topicos/${id}`, tema);
  }

  get(id:number){
    return this.http.get<Tema>(`http://localhost:8080/api/topicos/${id}`);
  }

  delete(tema: Tema){
    return this.http.delete(`http://localhost:8080/api/topicos/${tema.id}`);
  }

}
