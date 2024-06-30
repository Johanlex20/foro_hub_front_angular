import { Component, OnInit } from '@angular/core';
import { TemaService } from '../services/tema.service';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-temas-list',
  templateUrl: './temas-list.component.html',
  styleUrls: ['./temas-list.component.css']
})
export class TemasListComponent implements OnInit {

  temas?: Tema[];

  constructor(
    private temaService: TemaService
  ) { }

  ngOnInit(): void {
    this.loadTemas();
  }

  loadTemas(){
    this.temaService.paginate()
    .subscribe(temaPage => {
      this.temas = temaPage.content;
    })
  }

  deleteTema(tema:Tema){
    if(confirm('Esta seguro de eliminar el tema?')){
      this.temaService.delete(tema)
      .subscribe(()=>{
        this.loadTemas();
      });
    }
  }



}
