import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemaService } from '../services/tema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['./tema-form.component.css']
})
export class TemaFormComponent implements OnInit {

  errors: string[] = [];
  tema?: Tema;
  form?: FormGroup;


  constructor(
    private fb: FormBuilder,
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const temaId = this.route.snapshot.paramMap.get('id');

    if (temaId) {

      this.temaService.get(parseInt(temaId))
        .subscribe(tema => {
          //console.log('tema', tema);

          this.tema = tema;

          this.form = this.fb.group({
            titulo: [tema.titulo, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            mensaje: [tema.mensaje, [Validators.required, Validators.minLength(5), Validators.maxLength(5000), Validators.pattern('[a-z0-9- ]+')]],
            genero: [tema.genero, [Validators.required]],
            usuarioId: [tema.usuarioId, [Validators.required]]
          });
        });

    } else {

      this.form = this.fb.group({
        titulo: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        mensaje: [, [Validators.required, Validators.minLength(5), Validators.maxLength(5000), Validators.pattern('[a-z0-9- ]+')]],
        genero: [, [Validators.required]],
        usuarioId: [, [Validators.required]]
      });

    }
  }


  controlHasError(control: string, error: string) {
    return this.form!.controls[control].hasError(error);
  }

  save() {
    if (this.form!.invalid) {
      return;
    }

    let tema = this.form!.value;
    let request;


    if (this.tema) {
      request = this.temaService.update(this.tema.id, tema)
    } else {
      request = this.temaService.create(tema)
    }

    request
      .subscribe({
        next: tema => {
          this.router.navigate(['/admin/tema']);
        },
        error: error => {
          if (error.error.status === 400) {
            this.errors.push(error.error.detail);
          } else if (error.error.status === 422) {
            this.errors.push(...error.error.errors)
          }
        }
      })



  }


}
