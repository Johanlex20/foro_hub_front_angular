import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemasListComponent } from './temas-list/temas-list.component';
import { TemaFormComponent } from './tema-form/tema-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [

  {
    path: '',
    component: TemasListComponent
  },
  {
    path:'new',
    component: TemaFormComponent
  },
  {
    path:'usuarios',
    component: UsuarioListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
