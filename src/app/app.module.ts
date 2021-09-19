import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
