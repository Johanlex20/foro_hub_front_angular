import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemaService } from '../temas-list/tema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['./tema-form.component.css']
})
export class TemaFormComponent {

  errors: string [] = [];

  form:FormGroup =  this.fb.group({
    titulo:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    mensaje:[, [Validators.required, Validators.minLength(5), Validators.maxLength(5000), Validators.pattern('[a-z0-9- ]+')]],
    genero:[, [Validators.required]],
    usuarioId:[, [Validators.required]]
  });

  constructor( 
    private fb: FormBuilder,
    private temaService: TemaService, 
    private router: Router
   ){}

   controlHasError(control: string, error: string){
      return this.form.controls[control].hasError(error);
   }

   save(){
    if(this.form.invalid){
      return;
    }

    let tema = this.form.value;

    this.temaService.create(tema)
      .subscribe({
        next:tema=>{
          this.router.navigate(['/tema']);
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
