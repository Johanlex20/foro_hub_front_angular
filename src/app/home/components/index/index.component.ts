import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Tema } from 'src/app/interfaces/tema.interface';
import { Usuario } from 'src/app/interfaces/usuairo.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  lastTemas?: Tema[];
  //usuario: Usuario;

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(): void {
    this.homeService.getLastTemas()
    .subscribe(lastTemas => {
      this.lastTemas = lastTemas;
    });
  }

}
