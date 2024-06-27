import { Component, OnInit } from '@angular/core';
import { TemaService } from './tema.service';
import { Tema } from '../interfaces/tema.interface';

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
    this.temaService.paginate()
      .subscribe(temaPage => {
        this.temas = temaPage.content;
      })
  }






}
