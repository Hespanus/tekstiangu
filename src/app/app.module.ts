import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NappiComponent } from './nappi/nappi.component';
import { PelialueComponent } from './pelialue/pelialue.component';

@NgModule({
  declarations: [
    AppComponent,
    NappiComponent,
    PelialueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
