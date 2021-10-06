import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PelialueComponent} from "./pelialue/pelialue.component";
import {ArticlesComponent} from "./articles/articles.component";

const routes: Routes = [
  { path: 'peli', component: PelialueComponent },
  { path: 'artikkelit/:id', component: ArticlesComponent}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
