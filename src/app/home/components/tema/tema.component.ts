import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Tema } from 'src/app/interfaces/tema.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TemaService } from '../../../admin/components/services/tema.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-tema',
  templateUrl:'./tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema?: Tema;
  mostrarRespuestasState: boolean = false;
  usuarioAutenticado:boolean = false;
  


  constructor(
    private homeServices: HomeService,
    private route: ActivatedRoute,
    private temaService : TemaService,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {

    const temaId = this.route.snapshot.paramMap.get('id');
    //console.log('temaId:', temaId); 
    

    if (temaId) {
      this.homeServices.get(parseInt(temaId))
        .subscribe(tema => {
          //console.log('tema', tema);
          this.tema = tema;

          // Verificar si el usuario autenticado puede eliminar este tema
          this.usuarioAutenticado = this.authService.usuario?.id === tema.usuarioId;
        });
    }
  }

  mostrarRespuestas(): void {
    this.mostrarRespuestasState = !this.mostrarRespuestasState;
  }

  deleteTema(tema: Tema):void{
    if(this.usuarioAutenticado){
      this.temaService.delete(tema).subscribe( ()=>{
        console.log('Tema elinado');
        this.router.navigate(['/']);
      }
    ,error =>{
      console.error('Error al eliminar el tema', error);
    });
    }else{
      alert('No tienes permiso para eliminar este tema');
      // Aquí podrías mostrar un mensaje al usuario indicando que no tiene permiso
    }
}

}