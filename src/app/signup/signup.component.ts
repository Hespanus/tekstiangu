import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PeliService} from "../peli.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname = '';
  fname = '';
  lname = '';
  pword = '';

  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.peliService.addPlayer("uname="+this.uname+"&fname="+this.fname+"&lname="+this.lname+"&pword="+this.pword)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error', error)
      );
    f.reset();
  }
}
