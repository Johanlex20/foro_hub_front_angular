import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemasListComponent } from './temas-list/temas-list.component';
import { TemaFormComponent } from './tema-form/tema-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const routes: Routes = [

  {
    path: 'tema',
    component: TemasListComponent
  },
  {
    path:'new/tema',
    component: TemaFormComponent
  },
  {
    path:'tema/:id/edit',
    component: TemaFormComponent
  },
  {
    path:'usuarios',
    component: UsuarioListComponent
  },{
    path:'new/usuario',
    component: UsuarioFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
