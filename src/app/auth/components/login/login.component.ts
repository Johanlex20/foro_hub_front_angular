import { Component } from '@angular/core';
import { SolicitudAutenticacion, Profile } from '../../interfaces/auth.interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  solicitudAutenticacion : SolicitudAutenticacion = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ){}


  login(form: NgForm){
    if(form.invalid){
      return;
    }
    this.authService.autenticacion(this.solicitudAutenticacion)
    .subscribe(profile =>{
      this.snackBar.open(`Bienvenido ${profile.nombre}`, 'Cerrar', { 
        duration: 5000,
        verticalPosition: 'bottom', // cambiar por sweetmessages
        horizontalPosition: 'center'// cambiar por sweetmessages
      });
      this.router.navigate([''])
    });
  }

}
