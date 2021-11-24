import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AritmeticaComponent } from './aritmetica/aritmetica.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AritmeticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
