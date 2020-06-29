import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  //serviceUrl = 'https://randomuser.me/api/0.8/?results=20';
  serviceUrl='../assets/results.json';
	getUsers() {
  		return this.http.get(this.serviceUrl);
	}
}
