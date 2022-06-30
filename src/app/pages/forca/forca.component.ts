import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.scss']
})
export class ForcaComponent implements OnInit {

  usuario = {
    acertos: 0,
    total: 0,
    descr: "",
    cinco: [],
    correto: "",
    uresp: "",
    acertou: -1,
    porc: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
