import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../../interfaces/usuairo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios?: Usuario[];


  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsuario();
  }

  loadUsuario() {
    this.usuarioService.pagiante()
      .subscribe(usuarioPage => {
        this.usuarios = usuarioPage.content;
      });
  }


  deleteUsuario(usuario: Usuario) {
    if (confirm('Esta seguro de eliminar el usuario?')) {
      this.usuarioService.delete(usuario)
        .subscribe(() => {
          this.loadUsuario();
        });
    }




  }

}
