import { Component, OnInit } from '@angular/core';
import {Kysymys} from '../kysymys';
import {PeliService} from "../peli.service";

@Component({
  selector: 'app-pelialue',
  templateUrl: './pelialue.component.html',
  styleUrls: ['./pelialue.component.css']
})
export class PelialueComponent implements OnInit {
  kysymykset: Kysymys[] = [];

  kysind = [1,2,3,4];
  pisteetmax = 0;
  vastpisteet = 0;
  pisteetyht = 0;
  id = 1;
  palaute = " ";

  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
    this.peliService.getKysymys().subscribe((data) => (this.kysymykset = data));
  }
  valinta(){

  }
}
