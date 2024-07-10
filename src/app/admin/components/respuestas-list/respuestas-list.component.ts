import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../services/respuesta.service';
import { Respuesta, RespuestaPage } from 'src/app/interfaces/tema.interface';
import { PageEvent } from '@angular/material/paginator';


;


@Component({
  selector: 'app-respuestas-list',
  templateUrl: './respuestas-list.component.html',
  styleUrls: []
})
export class RespuestasListComponent implements OnInit{

  respuestaPage?: RespuestaPage;
  displayedColums = [
    'id','respuesta','tema','usuario','createdAt','activo','actions'
  ]

  respuestas?: Respuesta[];


  constructor(
    private respuestaService: RespuestaService
  ){}

  ngOnInit(): void {
    this.loadRespuesta();
  }

  loadRespuesta(){
    this.respuestaService.paginate()
    .subscribe(respuestaPage =>{
      this.respuestaPage = respuestaPage;
    });
  }

  deleteRespuesta(respuesta: Respuesta){
    if(confirm('¿Estás seguro de que quieres eliminar esta respuesta?')){
    this.respuestaService.delete(respuesta)
      .subscribe(()=>{
        this.loadRespuesta();
      });
    }
  }

  paginateRespuesta (event: PageEvent){
    const { pageIndex, pageSize } = event;

    this.respuestaService.paginate(pageSize, pageIndex)
      .subscribe(respuestaPage => {
        this.respuestaPage = respuestaPage;
      });
  }



}
