import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { TemasListComponent } from './components/temas-list/temas-list.component';
import { TemaFormComponent } from './components/tema-form/tema-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RespuestasListComponent } from './components/respuestas-list/respuestas-list.component';



@NgModule({
  declarations: [
    TemasListComponent,
    TemaFormComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    LayoutComponent,
    RespuestasListComponent
  ],
  imports: [
    
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule

  ]
})
export class AdminModule { }
