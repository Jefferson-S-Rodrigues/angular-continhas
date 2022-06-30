import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AritmeticaComponent } from './pages/aritmetica/aritmetica.component';
import { ExprNumComponent } from './pages/expr-num/expr-num.component';
import { AnimaisComponent } from './pages/animais/animais.component';
import { ForcaComponent } from './pages/forca/forca.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: DashboardComponent },
  { path: 'aritmetica', component: AritmeticaComponent },
  { path: 'expressoes-numericas', component: ExprNumComponent },
  { path: 'animais', component: AnimaisComponent },
  { path: 'forca', component: ForcaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
