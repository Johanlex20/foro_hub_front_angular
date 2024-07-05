import { Component, OnInit } from '@angular/core';
import { TemaService } from '../services/tema.service';
import { Tema, TemaPage } from '../../../interfaces/tema.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-temas-list',
  templateUrl: './temas-list.component.html',
  styleUrls: ['./temas-list.component.css']
})
export class TemasListComponent implements OnInit {

  temaPage?: TemaPage;
  displayedColums =[
    'id','mensaje','genero','usuario','createdAt','activo','actions'
  ]

  constructor(
    private temaService: TemaService
  ) { }

  ngOnInit(): void {
    this.loadTemas();
  }

  loadTemas(){
    this.temaService.paginate()
    .subscribe(temaPage => {
      this.temaPage = temaPage;
    });
  }


  deleteTema(tema:Tema){
    if(confirm('Esta seguro de eliminar el tema?')){
      this.temaService.delete(tema)
      .subscribe(()=>{
        this.loadTemas();
      });
    }
  }

  paginateTemas (event: PageEvent){
    const { pageIndex, pageSize } = event;

    this.temaService.paginate(pageSize, pageIndex)
      .subscribe(temaPage => {
        this.temaPage = temaPage;
      });
  }


  


}
