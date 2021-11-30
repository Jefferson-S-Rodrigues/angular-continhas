import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AritmeticaComponent } from './aritmetica/aritmetica.component';
import { ExprNumComponent } from './expr-num/expr-num.component';
import { AnimaisComponent } from './animais/animais.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'aritmetica', component: AritmeticaComponent },
  { path: 'expressoes-numericas', component: ExprNumComponent },
  { path: 'animais', component: AnimaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
