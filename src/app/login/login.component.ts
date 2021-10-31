import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';
  submitted = false;
  error = '';

  currentUser?: User;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  onSubmit(log: NgForm){
    this.submitted = true;
    if(!this.currentUser) {
      this.authService.login("uname=" + this.username + "&pword=" + this.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/peli']);
          },
          error => {
            this.error = error;
          }
        );
    } else if(this.currentUser){
      this.authService.logout();
    }
  }


}
