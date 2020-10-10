import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Matchday } from '../model/matchday';

@Injectable({
  providedIn: 'root'
})
export class MatchdayService {
  private CURRENT_MATCHDAY_URL = 'http://localhost:8080/matchdays/current';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getCurrentMatchday() {
    return this.http.get<Matchday>(this.CURRENT_MATCHDAY_URL, this.httpOptions);
  }
}
