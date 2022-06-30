import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']
})
export class AnimaisComponent implements OnInit {

  lista = new Map<string, string>();
  animais = [];
  
  cores = ['primary', 'accent', 'warn'];

  title = "Qual é o animal?";

  usuario = {
    acertos: 0,
    total: 0,
    descr: "",
    cinco: [],
    correto: "",
    uresp: "",
    acertou: -1,
    porc: 0,
    btCor: "primary"
  };

  clickAnimal(resp) {

    if (resp == null) {
      return;
    }

    let acert: boolean;

    this.usuario.uresp = resp;

    acert = resp == this.usuario.correto;

    this.usuario.acertou = acert ? 1 : 0;

    if (acert) {
      this.usuario.acertos++;
    }

    this.usuario.total++;

    this.usuario.porc = Math.floor(this.usuario.acertos / this.usuario.total * 100);

    this.proximo();
    
  }

  ngOnInit(): void {

    this.lista.set('Águia', 'Ave que voa muito alto e caça outro animais para se alimentar');
    this.lista.set('Cachorro', 'Um animal que pode viver com pessoas e late');
    this.lista.set('Gato', 'Um animal que gosta de fazer carinho e miar');
    this.lista.set('Lobo', 'Um animal que parece cachorro e uiva nas noites de lua cheia');
    this.lista.set('Coruja', 'Uma ave que faz poo e gosta de sair a noite');
    this.lista.set('Baleia', 'Um animal que vive no mar e é muito grande, já engoliu o Pinóquio');
    this.lista.set('Girafa', 'Um animal que tem um pescoço bem grande');
    this.lista.set('Elefante', 'Um animal bem grande, mas que tem medo de rato e gosta de amendoim');
    this.lista.set('Jacaré', 'Um lagarto bem grande que fica nos rios e, quando vai caçar, coloca os olhos para fora d\'água');
    this.lista.set('Rato', 'Um roedor bem pequeno que gosta de comer queijo');
    this.lista.set('Tigre', 'Um animal de cor laranja e preto que parece um gato bem grande');
    this.lista.set('Formiga', 'Um inseto bem pequeno e trabalhador');
    this.lista.set('Tubarão', 'Um animal que mora no mar e caça outros peixes, ele tem muitos dentes bem afiados');
    this.lista.set('Leão', 'Ele é o rei da selva');
    this.lista.set('Foca', 'Um animal que vive na água e gosta de bricar com bola');
    this.lista.set('Barata', 'Um inseto grande e nojento que gosta de esgoto');
    this.lista.set('Abelha', 'Um inseto que voa e tem ferrão, faz mel');
    this.lista.set('Mosquito', 'Um inseto que gosta de pertubar o sono das pessoas e picar, a pícada fica coçando');
    this.lista.set('Sapo', 'Um animal que vive na lagoa, gosta de comer insetos e não lava o pé');
    this.lista.set('Cobra', 'Um animal que não tem patas, vive rastejando, todos têm medo da sua mordida');
    this.lista.set('Aranha', 'Um animal que faz sua casa com teia');
    this.lista.set('Galinha', 'Um animal que passa o dia ciscando o chão e botando ovos');
    this.lista.set('Vaca', 'Um animal muito conhecido por seu leite');
    this.lista.set('Porco', 'Um animal que vive na lama e come lavagem');

    this.animais = Array.from(this.lista.keys());

    this.proximo();
  }

  proximo() {
    const shuffled = this.animais.sort(() => 0.5 - Math.random());
    
    let selected = shuffled.slice(0, 5);

    this.usuario.cinco = Array.from(selected);
    this.usuario.correto = this.usuario.cinco[Math.floor(Math.random() * this.usuario.cinco.length)];
    this.usuario.descr = this.lista.get(this.usuario.correto);

    this.usuario.btCor = this.cores[Math.floor(Math.random() * this.cores.length)];

  }

  constructor() { }

}
