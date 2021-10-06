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
    this.router.events.subscribe( (value   ) => {
        if(value instanceof NavigationEnd ){
          let s = value.url.split("/");
          let idi = s[s.length-1];
          console.log(this.route.snapshot.paramMap.keys)

          this.peliService.getArtikkeli('aasiakas'+idi+'.json').subscribe((data) => (this.artikkeli = data));
        }

      }
    )
  }

  ngOnInit(): void {

  }

}

