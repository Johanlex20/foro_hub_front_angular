import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TemasComponent } from './components/temas/temas.component';
import { TemaComponent } from './components/tema/tema.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'temas',
    component: TemasComponent
  },
  {
    path: 'tema/:id',
    component: TemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
