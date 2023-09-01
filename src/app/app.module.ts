import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AritmeticaComponent } from './pages/aritmetica/aritmetica.component';
import { ExprNumComponent } from './pages/expr-num/expr-num.component';
import { ReplacePipe } from './core/pipe/replace.pipe';
import { AnimaisComponent } from './pages/animais/animais.component';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { TemaComponent } from './shared/components/tema/tema.component';
import {OverlayModule } from '@angular/cdk/overlay';
import { ForcaComponent } from './pages/forca/forca.component';
import { DesenhoForcaComponent } from './pages/forca/desenho-forca/desenho-forca.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AritmeticaComponent,
    ExprNumComponent,
    ReplacePipe,
    AnimaisComponent,
    TopoComponent,
    RodapeComponent,
    TemaComponent,
    ForcaComponent,
    DesenhoForcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
