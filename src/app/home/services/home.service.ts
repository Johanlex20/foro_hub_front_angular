import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from 'src/app/interfaces/tema.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient
  ) { }

  getLastTemas(){
    return this.http.get<Tema[]>(`${environment.apiBase}/home/last-temas`);
  }

}
