
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Context/DTOs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  // login ////////////////////////////////////

  login(data: Login): Observable<any> {
    return this._HttpClient.post(environment.baseApi.replace('products', 'auth') + '/login', data)
  }

  // check if user logged in///////////////////
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
