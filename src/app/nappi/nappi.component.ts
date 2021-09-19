import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nappi',
  templateUrl: './nappi.component.html',
  styleUrls: ['./nappi.component.css']
})
export class NappiComponent implements OnInit {
  @Input() text = '';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
