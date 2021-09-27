import { Component, OnInit } from '@angular/core';
import {Kysymys} from '../kysymys';
import {PeliService} from "../peli.service";

@Component({
  selector: 'app-pelialue',
  templateUrl: './pelialue.component.html',
  styleUrls: ['./pelialue.component.css']
})
export class PelialueComponent implements OnInit {
  kysymykset!: Kysymys[];

  kysind: number[] = [1,2,3,4];
  pisteetmax: number = 0;
  vastpisteet: number = 0;
  pisteetyht: number = 0;
  id: number = this.kysind[Math.floor(Math.random() * this.kysind.length)];
  palaute: string = " ";


  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
    this.peliService.getKysymys().subscribe((data) => (this.kysymykset = data));
  }
  haku(){
    for(let i = 0; i < this.kysymykset.length; i++){
      if (this.kysymykset[i].id === this.id){
        return i;
      }
    }
    return 0;
  }

  valinta(vastaus: object){


  }
}
