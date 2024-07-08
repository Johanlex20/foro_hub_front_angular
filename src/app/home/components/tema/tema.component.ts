import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Tema } from 'src/app/interfaces/tema.interface';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl:'./tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema!: Tema;
  mostrarRespuestasState: boolean = false;


  constructor(
    private homeServices: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const temaId = this.route.snapshot.paramMap.get('id');
    //console.log('temaId:', temaId); 
    

    if (temaId) {
      this.homeServices.get(parseInt(temaId))
        .subscribe(tema => {
          console.log('tema', tema);
          this.tema = tema;
        });
    }
  }

  mostrarRespuestas(): void {
    this.mostrarRespuestasState = !this.mostrarRespuestasState;
  


  }
}