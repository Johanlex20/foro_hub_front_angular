import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['./tema-form.component.css']
})
export class TemaFormComponent {
  form:FormGroup =  this.fb.group({
    titulo:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    mensaje:[, [Validators.pattern('[a-z0-9-]+')]],
    genero:[, [Validators.required]],
    usuarioId:[, [Validators.required]]
  });

  constructor( 
    private fb: FormBuilder 
   ){}


   save(){
    console.log('form valid', this.form.valid );
    console.log('form', this.form.value);
   }

}
