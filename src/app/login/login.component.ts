import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { PeliService} from "../peli.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';


  constructor(private peliService: PeliService) { }

  ngOnInit(): void {
  }

  onSubmit(log: NgForm){
    this.peliService.http
  }

}
