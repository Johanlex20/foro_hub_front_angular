import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario, UsuarioPage } from '../../../interfaces/usuairo.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioPage?: UsuarioPage;
  displayedColums= ['id','titulo','email','password','createdAt','estado','actions']


  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsuario();
  }

  loadUsuario() {
    this.usuarioService.paginate()
      .subscribe(usuarioPage => {
        this.usuarioPage = usuarioPage;
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

  paginateUsuario(event: PageEvent){
    const { pageIndex, pageSize } = event;
    
    this.usuarioService.paginate(pageSize, pageIndex)
      .subscribe(usuarioPage => {
        this.usuarioPage = usuarioPage;
      });
  }


}
