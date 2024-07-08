import { Component } from '@angular/core';
import { SolicitudAutenticacion } from '../interfaces/auth.interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  solicitudAutenticacion : SolicitudAutenticacion = {};

  constructor(
    private router: Router,
    private authService: AuthService
  ){}


  login(form: NgForm){
    if(form.invalid){
      return;
    }
    this.authService.autenticacion(this.solicitudAutenticacion)
    .subscribe(response =>{
      console.log('r', response);
    });
  }

}
