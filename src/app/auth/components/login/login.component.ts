import { Component } from '@angular/core';
import { SolicitudAutenticacion } from '../interfaces/auth.interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  solicitudAutenticacion : SolicitudAutenticacion = {};

  constructor(
    private router: Router
  ){}


  login(form: NgForm){
    console.log('form', this.solicitudAutenticacion);
  }

}
