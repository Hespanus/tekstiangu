import { Component, OnInit } from '@angular/core';
import { PeliService} from "../peli.service";
import { Artikkeli} from "../artikkeli";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  artikkeli!: Artikkeli;



  constructor(private route: ActivatedRoute, private peliService: PeliService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) =>{
      let idi = value.get('id');
      console.log(idi)
      this.peliService.getArtikkeli('aasiakas'+idi+'.json').subscribe((data) => (this.artikkeli = data));
      }

    )
  }

}

