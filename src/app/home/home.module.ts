import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from "../shared/shared.module";
import { TemasComponent } from './components/temas/temas.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TemaComponent } from './components/tema/tema.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TemaCardComponent } from './components/shared/tema-card/tema-card.component';
import { FormularioTemaComponent } from './components/formulario-tema/formulario-tema.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        IndexComponent,
        TemasComponent,
        TemaComponent,
        LayoutComponent,
        TemaCardComponent,
        FormularioTemaComponent,

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        SharedModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class HomeModule { }
