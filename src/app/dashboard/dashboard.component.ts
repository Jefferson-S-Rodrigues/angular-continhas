import { Component } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private breakpointObserver: BreakpointObserver) {}

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Aritmética', cols: 1, rows: 1, content: 'Continhas de &#215; e &#247;', link: 'aritmetica' },
          { title: 'Expressões Numéricas', cols: 1, rows: 1, content: 'Continhas de +, - e &#215;', link: 'expressoes-numericas' },
          { title: 'Animais', cols: 1, rows: 1, content: 'Qual é o animal?', link: 'animais' }
        ];
      }

      return [
        { title: 'Aritmética', cols: 1, rows: 1, content: 'Continhas de &#215; e &#247;', link: 'aritmetica' },
        { title: 'Expressões Numéricas', cols: 1, rows: 1, content: 'Continhas de +, - e &#215;', link: 'expressoes-numericas' },
        { title: 'Animais', cols: 1, rows: 1, content: 'Qual é o animal?', link: 'animais' }
      ];
    })
  );

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

}
