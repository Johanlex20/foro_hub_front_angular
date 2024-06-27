import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemasListComponent } from './temas-list/temas-list.component';
import { TemaFormComponent } from './tema-form/tema-form.component';

const routes: Routes = [

  {
    path: '',
    component: TemasListComponent
  },
  {
    path:'new',
    component: TemaFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
