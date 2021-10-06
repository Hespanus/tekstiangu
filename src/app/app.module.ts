import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NappiComponent } from './nappi/nappi.component';
import { PelialueComponent } from './pelialue/pelialue.component';
import { AppRoutingModule } from './app-routing.module';



import { ArticlesComponent } from './articles/articles.component';




@NgModule({
  declarations: [
    AppComponent,
    NappiComponent,
    PelialueComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
