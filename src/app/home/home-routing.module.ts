import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TemasComponent } from './components/temas/temas.component';
import { TemaComponent } from './components/tema/tema.component';
import { LayoutComponent } from './components/layout/layout.component';



const routes: Routes = [
{
  path:'',
  component:LayoutComponent,
  children:[
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
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
