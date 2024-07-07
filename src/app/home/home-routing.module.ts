import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TemasComponent } from './components/temas/temas.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'temas',
    component: TemasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
