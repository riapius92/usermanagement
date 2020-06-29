import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   constructor(private http: HttpClient) { 

   }

   userUrl = '../assets/login.json';

	getCredential() {
  		return this.http.get(this.userUrl);
	}
}
