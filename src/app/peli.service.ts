import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Kysymys} from "./kysymys";
import {Artikkeli} from "./artikkeli";
import {Pelaaja} from "./pelaaja";

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private apiUrl = 'http://localhost/';



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

}
