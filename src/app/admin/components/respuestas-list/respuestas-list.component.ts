import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../services/respuesta.service';
import { Respuesta } from 'src/app/interfaces/respuesta.interface';
;


@Component({
  selector: 'app-respuestas-list',
  templateUrl: './respuestas-list.component.html',
  styleUrls: []
})
export class RespuestasListComponent implements OnInit{

  respuestas?: Respuesta[];


  constructor(
    private respuestaService: RespuestaService
  ){}

  ngOnInit(): void {
    this.respuestaService.paginate()
    .subscribe(respuestaPage =>{
      this.respuestas = respuestaPage.content;
    })
  }






}
