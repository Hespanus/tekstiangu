import { Component, OnInit } from '@angular/core';
import {Kysymys} from '../kysymys';
import {PeliService} from "../peli.service";
import {Pelaaja} from "../pelaaja";

@Component({
  selector: 'app-pelialue',
  templateUrl: './pelialue.component.html',
  styleUrls: ['./pelialue.component.css']
})
export class PelialueComponent implements OnInit {
  pelaaja!: Pelaaja[];
  kysymykset!: Kysymys[];
  kysind: number[] = [1,2,3,4];
  pisteetmax: number | undefined = 0;
  vastpisteet: number = 0;
  pisteetyht: number = 0;
  id: number = this.kysind[Math.floor(Math.random() * this.kysind.length)];
  palaute: string = " ";

  tiedosto: string = 'index';
  file: string = "";
  testi: string = "";


  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
    this.peliService.getKysymys(this.tiedosto).subscribe((data) => (this.kysymykset = data));
    this.peliService.getPelaaja(this.file).subscribe((data) => (this.pelaaja = data));
  }

  arvonta() {
    this.id = this.kysind[Math.floor(Math.random() * this.kysind.length)];
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
    for (let i = 0; i < this.kysind.length; i++) {
      if (this.kysind[i] === this.id) {
        this.kysind.splice(i, 1);
      }
    }
    // @ts-ignore
    this.palaute = vastaus.info;
    this.pisteetmax = 0;
    // @ts-ignore
    this.vastpisteet = vastaus.pisteet;
    this.pisteetyht += this.vastpisteet;

    // @ts-ignore
    for (let vast of (this.kysymykset)[this.haku()].Vastaukset){

      // @ts-ignore
      if(vast.pisteet > this.pisteetmax){
        this.pisteetmax = vast.pisteet;
      }
    }

    // @ts-ignore
    if(this.id === 999 && vastaus.kysymys === 1){
      this.pisteetyht = 0;
      this.kysind = [1, 2, 3, 4];
      this.arvonta();
    }
    // @ts-ignore
    if(vastaus.kysymys === 998 && this.kysind.length === 0){
      this.id = 999;

    } else { // @ts-ignore
      if(vastaus.kysymys === 998){
            this.arvonta();
          } else {
            // @ts-ignore
        this.id = vastaus.kysymys;

          }
    }




  }


}
