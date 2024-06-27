import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../interfaces/usuairo.interface';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios?: Usuario[];


  constructor(
    private usuarioService: UsuarioService
  ){}

ngOnInit(): void {
    this.usuarioService.pagiante()
    .subscribe(usuarioPage => {
        this.usuarios = usuarioPage.content;
    });
}

  

}
