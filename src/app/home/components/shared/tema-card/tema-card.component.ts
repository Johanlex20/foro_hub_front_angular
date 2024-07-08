import { Component, Input } from '@angular/core';
import { Tema } from '../../../../interfaces/tema.interface';

@Component({
  selector: 'app-tema-card',
  templateUrl: './tema-card.component.html',
  styleUrls: []
})
export class TemaCardComponent {

  @Input() tema!: Tema;

}
