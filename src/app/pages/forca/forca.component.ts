import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.scss']
})
export class ForcaComponent implements OnInit {

  title = 'Jogo da forca';
  todas: number = 0;

  forca = [];
  forca_exibir = "";

  erros: number = 0;

  usuario = {
    acertos: 0,
    total: 0,
    palavra: "",
    palavrasa: "",
    correto: "",
    letradig: [],
    uresp: "",
    acertou: -1,
    porc: 0
  };

  constructor() { }

  ngOnInit() {
    this.proximaPalavra();
  }

  proximaPalavra() {
    this.usuario.letradig = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    this.usuario.palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    this.usuario.palavrasa = this.usuario.palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.todas = this.usuario.palavrasa.length;
    this.forca = '_'.repeat(this.todas).split("");
    this.forca_exibir = this.forca.join(" ");

  }

  proximaLetra(letra: string) {
    let l = letra.toUpperCase();
    this.usuario.letradig =this.usuario.letradig.filter(obj => obj !== l); ;
    let letra_errada = true;
    for (let i = 0; i < this.usuario.palavrasa.length; i++) {
      if (this.usuario.palavrasa[i] == l && this.forca[i] == '_') {
        this.todas--;
        this.forca[i] = this.usuario.palavra[i];
        letra_errada = false;
      }
    }
    this.forca_exibir = this.forca.join(" ");
    if (letra_errada) {
      this.erros++;
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.proximaLetra(event.key);
  }

}

const palavras = [
  'ENGENHEIRO', 'MÉDICA', 'PISCINA', 'BANANA', 'amarelo', 'Caneca', 'Girafa', 'Escola', 'Agnóstico',
  'Elefante', 'Escola', 'Estojo', 'Geleia', 'Limonada', 'Passarinho', 'Umbigo', 'Acender',
  'Asterisco', 'Chuveiro', 'COnviVência', 'COração', 'Esquerdo', 'Independência', 'Oftalmologista',
  'Otorrinolaringologista', 'Paralelepípedo', 'Quarentena', 'Reportagem', 'Temperança', 'Fleumático',
  'Verossimilhança', 'Banheiro', 'Cachorro', 'Campeonato', 'Corrupção', 'Galáxia', 'Forca',
  'História', 'Oração', 'Pneumonia', 'Trilogia', 'Xícara', 'Brincadeira', 'Psicologia', 'Universidade'
];