import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    role:[,[]]
  })

  constructor(
    private fb : FormBuilder
  ){}

  save(){
    console.log('form valid' , this.form.valid);
    console.log('form', this.form.value);
  }


}
