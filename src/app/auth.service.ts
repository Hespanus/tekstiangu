import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import {map} from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'

  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/login/';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<User>(jwt_decode(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }
  login(signindata:string): Observable<any>{

    return this.http.post<any>(this.apiUrl, signindata, httpOptions)
      .pipe(map(user =>{
        console.log(user);
        localStorage.setItem('token', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('token');

    // @ts-ignore
    this.currentUserSubject.next(null);
  }

}
