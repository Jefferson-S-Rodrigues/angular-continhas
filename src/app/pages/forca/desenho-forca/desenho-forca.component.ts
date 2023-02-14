import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desenho-forca',
  templateUrl: './desenho-forca.component.html',
  styleUrls: ['./desenho-forca.component.scss']
})
export class DesenhoForcaComponent {

  @Input() letras_erradas: number = 0;

  constructor() { }

}
