import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemasListComponent } from './components/temas-list/temas-list.component';
import { TemaFormComponent } from './components/tema-form/tema-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


const routes: Routes = [

  {
    path: 'tema',
    component: TemasListComponent
  },
  {
    path:'tema/new',
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
    path:'usuario/new',
    component: UsuarioFormComponent
  },
  {
    path:'usuario/:id/edit',
    component: UsuarioFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
