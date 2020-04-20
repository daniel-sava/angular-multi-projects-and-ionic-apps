import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Library2Module } from 'library2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Library2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
