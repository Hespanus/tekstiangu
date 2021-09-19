import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelialue',
  templateUrl: './pelialue.component.html',
  styleUrls: ['./pelialue.component.css']
})
export class PelialueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valinta(){
    console.log('Pupu');
  }
}
