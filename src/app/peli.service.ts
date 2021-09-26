import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Kysymys} from "./kysymys";

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private apiUrl = 'http://localhost/peli.json';

  constructor(private http: HttpClient) {
  }
  getKysymys(): Observable<Kysymys[]> {
    return this.http.get<Kysymys[]>(this.apiUrl);
  }


}
