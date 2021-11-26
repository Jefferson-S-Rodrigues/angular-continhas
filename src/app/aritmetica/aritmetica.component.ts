import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.component.html',
  styleUrls: ['./aritmetica.component.scss']
})
export class AritmeticaComponent implements OnInit {

  title = "Aritmética";

  usuario = {
    acertos: 0,
    total: 0,
    a: 0,
    b: 0,
    o: 0,
    uresp: 0,
    uresto: 0,
    uo: -1,
    acertou: -1,
    porc: 0
  };

  contaForm = this.fb.group({
    resposta: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    ],
    resto: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    ]
  });

  onSubmit() {
    let resp: number = this.contaForm.get("resposta")?.value;
    let rest: number = this.contaForm.get("resto")?.value;

    if (resp == null || (rest == null && this.usuario.o == 1)) {
      return;
    }

    let acert: boolean;

    this.usuario.uresp = resp;
    this.usuario.uresto = rest;
    this.usuario.uo = this.usuario.o;

    if (this.usuario.o == 0) {
      acert = resp == (this.usuario.a * this.usuario.b);
    } else {
      acert = (resp == (Math.floor(this.usuario.a / this.usuario.b)) &&
        rest == (this.usuario.a % this.usuario.b));
    }

    this.usuario.acertou = acert ? 1 : 0;

    if (acert) {
      this.usuario.acertos++;
    }

    this.usuario.total++;

    this.usuario.porc = Math.floor(this.usuario.acertos / this.usuario.total * 100);

    this.contaForm.reset();

    this.proximo();
    
  }

  ngOnInit() {
    this.proximo();
  }

  proximo() {
    this.usuario.o = Math.round(Math.random());
    if (this.usuario.o) {
      this.usuario.a = Math.round(Math.random() * 9000) + 1000;
      this.usuario.b = Math.round(Math.random() * 12) + 1;
    } else {
      this.usuario.a = Math.round(Math.random() * 9000) + 1000;
      this.usuario.b = Math.round(Math.random() * 1000) + 1;
    }
  }

  constructor(private fb: FormBuilder) { }

}
