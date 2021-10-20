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



  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

  }
}
