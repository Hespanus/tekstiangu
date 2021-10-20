import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Kysymys} from "./kysymys";
import {Artikkeli} from "./artikkeli";
import {Pelaaja} from "./pelaaja";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};*/

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private apiUrl = 'http://localhost/';

  private playerUrl = 'http://localhost/addplayer';



  constructor(private http: HttpClient) {
  }
  getKysymys(file: string): Observable<Kysymys[]> {
    return this.http.get<Kysymys[]>(this.apiUrl + file);
  }
  getArtikkeli(file: string): Observable<Artikkeli> {
    return this.http.get<Artikkeli>(this.apiUrl + file);
  }
  getPelaaja(file: string): Observable<Pelaaja[]> {
    return this.http.get<Pelaaja[]>(this.apiUrl + file);
  }
  addPlayer(): Observable<any>{
    return this.http.post<any>(this.playerUrl, )

  }

 /* private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {

      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }*/
}
