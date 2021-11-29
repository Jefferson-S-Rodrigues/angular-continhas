import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AritmeticaComponent } from './aritmetica/aritmetica.component';
import { ExprNumComponent } from './expr-num/expr-num.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'aritmetica', component: AritmeticaComponent },
  { path: 'expressoes-numericas', component: ExprNumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
