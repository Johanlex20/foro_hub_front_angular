import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario-list/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  form:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
    email:['', [Validators.required, Validators.email]],
    password:[,[Validators.required, Validators.pattern('[a-z0-9- ]+'), Validators.minLength(5)]],
    role:[,[Validators.required]]
  })

  constructor(
    private fb : FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  controlHasError(control: string, error: string){
    return this.form.controls[control].hasError(error);
  };

  save(){
    if(this.form.invalid){
      return;
    }

    let usuario = this.form.value;
    usuario.filePerfil = "img.dumy"

    this.usuarioService.create(usuario)
      .subscribe( usuario=>{
        this.router.navigate(['/usuarios']);
      });
  
  }



  
  


}
