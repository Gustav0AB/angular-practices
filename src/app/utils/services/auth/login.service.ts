import { Injectable } from '@angular/core';
import { LoginRequest } from '../../interfaces/auth/interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginRequest(credentials:LoginRequest){
    this.http.get('')
  }
}
