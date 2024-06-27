import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemasListComponent } from './temas-list/temas-list.component';
import { HttpClientModule } from '@angular/common/http';

import { TemaFormComponent } from './tema-form/tema-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TemasListComponent,
    TemaFormComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
