import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaPage } from 'src/app/interfaces/respuesta.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(
    private http:HttpClient
  ) { }


  paginate(){
    return this.http.get<RespuestaPage>(`${environment.apiBase}/respuesta`)
  }

}
