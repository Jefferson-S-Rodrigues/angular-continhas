import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-expr-num',
  templateUrl: './expr-num.component.html',
  styleUrls: ['./expr-num.component.scss']
})
export class ExprNumComponent implements OnInit {

  title = "Expressões Numéricas";

  usuario = {
    acertos: 0,
    total: 0,
    expr: "",
    uresp: 0,
    acertou: -1,
    porc: 0,
    seg: false
  };

  mensagem = "";

  contaForm = this.fb.group({
    resposta: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    ]
  });

  onSubmit() {
    let resp: number = this.contaForm.get("resposta")?.value;

    if (resp == null) {
      return;
    }

    let acert: boolean;

    this.usuario.uresp = resp;

    this.mensagem = `Última resposta: ${this.usuario.uresp}`;

    let respEsp = eval(this.usuario.expr.replace(/[^0-9!*+-]+/g, ""));

    acert = resp == respEsp;

    this.usuario.acertou = acert ? 1 : 0;
    this.usuario.seg = (!acert) && (!this.usuario.seg);

    if (acert) {
      this.usuario.acertos++;
    }

    this.usuario.total++;

    this.usuario.porc = Math.floor(this.usuario.acertos / this.usuario.total * 100);

    this.contaForm.reset();

    if (!this.usuario.seg) {
      this.proximo();
    }
    
  }

  ngOnInit(): void {

    this.proximo();
  }

  proximo() {
    let l = 1;
    let m = 20;
    let contas = [' +',' -',' *',' +',' *'];
    let ff = Math.round(Math.random());
    let expressao = ' ' + Math.floor(Math.random() * m + l).toString();
    expressao += contas[Math.floor(Math.random() * contas.length)];
    expressao += ' ' + Math.floor(Math.random() * m + l).toString();
    expressao += contas[Math.floor(Math.random() * contas.length)];
    expressao += ' ' + Math.floor(Math.random() * m + l).toString();
    expressao += contas[Math.floor(Math.random() * contas.length)];
    expressao += ' ' + Math.floor(Math.random() * m + l).toString();
    if (ff > 0) {
        expressao += contas[Math.floor(Math.random() * contas.length)];
        expressao += ' ' + Math.floor(Math.random() * m + l).toString();
    }

    this.usuario.expr = expressao;
  }

  constructor(private fb: FormBuilder) { }

}
