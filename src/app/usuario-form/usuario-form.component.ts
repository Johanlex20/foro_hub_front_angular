import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario-list/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/usuairo.interface';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{

  errors: string [] = [];
  usuario? :Usuario;

  form?: FormGroup;

  constructor(
    private fb : FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route:ActivatedRoute
  ){}


  ngOnInit(): void {
    const usuarioId = this.route.snapshot.paramMap.get('id');

    if(usuarioId){
      this.usuarioService.get(parseInt(usuarioId))
      .subscribe( usuario => {
       // console.log('usuario', usuario);
       this.usuario = usuario;


        this.form = this.fb.group({
          nombre:[usuario.nombre,[Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
          email:[usuario.email, [Validators.required, Validators.email]],
          password:[usuario.password,[Validators.required, Validators.pattern('[a-z0-9- ]+'), Validators.minLength(5)]],
          role:[usuario.role,[Validators.required]]
        });
      });
    }else{
      this.form = this.fb.group({
          nombre:['',[Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
          email:['', [Validators.required, Validators.email]],
          password:[,[Validators.required, Validators.pattern('[a-z0-9- ]+'), Validators.minLength(5)]],
          role:[,[Validators.required]]
        });
    }
  }

  
  controlHasError(control: string, error: string){
    return this.form!.controls[control].hasError(error);
  };

  save(){
    if(this.form!.invalid){
      return;
    }

    let usuario = this.form!.value;
    usuario.filePerfil = "img.dumy"

    let request;

    if(this.usuario){
      request = this.usuarioService.update(this.usuario.id, usuario)
    }else{
      request = this.usuarioService.create(usuario);
    }

    request
      .subscribe({
        next:usuario=>{
          this.router.navigate(['/usuarios']);
        },
        error: error =>{
          if(error.error.status === 400){
            this.errors.push(error.error.detail);
          }else if(error.error.status === 422){
            this.errors.push(...error.error.errors)
          }
        }
      });
  
  }



  
  


}
