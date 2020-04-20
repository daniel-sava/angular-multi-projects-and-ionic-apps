import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Library1Module } from 'library1';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Library1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
