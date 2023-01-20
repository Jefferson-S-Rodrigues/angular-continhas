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
  desenho = desenhos[0];

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
    this.usuario.letradig = [];
    this.usuario.palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    this.usuario.palavrasa = this.usuario.palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.todas = this.usuario.palavrasa.length;
    this.forca = '_'.repeat(this.todas).split("");
    this.forca_exibir = this.forca.join(" ");

  }

  proximaLetra(letra: string) {
    for (let i = 0; i < this.usuario.palavrasa.length; i++) {
      if (this.usuario.palavrasa[i] == letra.toUpperCase() && this.forca[i] == '_') {
        this.todas--;
        this.forca[i] = this.usuario.palavra[i];
      }
    }
    this.forca_exibir = this.forca.join(" ");
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

const desenhos = [
`
_____<br>
|   |<br>
|<br>
|
`
];