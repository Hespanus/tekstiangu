import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Kysymys} from "./kysymys";
import {Artikkeli} from "./artikkeli";
import {Pelaaja} from "./pelaaja";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private apiUrl = 'http://159.223.21.84/';

  private playerUrl = 'http://159.223.21.84/addplayer';


  constructor(private http: HttpClient) {
  }

  getKysymys(file: string): Observable<Kysymys[]> {
    return this.http.get<Kysymys[]>(this.apiUrl + file);
  }

  getArtikkeli(file: string): Observable<Artikkeli> {
    return this.http.get<Artikkeli>(this.apiUrl + file);
  }



  addPlayer(signupdata: string): Observable<any> {
    return this.http.post<any>(this.playerUrl, signupdata, httpOptions);

  }



}
