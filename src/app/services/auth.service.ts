import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service'
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private config:ConfigService, private http:HttpClient) { }

  registerUser(value){
    console.log('inside auth service', value)
    let newUser = {
      "first_name" : value.first_name,
      "last_name" : value.last_name,
      "email" : value.email,
      "dob" : value.dob,
      "gender" : value.gender,
      "password" : value.password
    }

    this.http.post<User>(this.config.baseURL + 'users/register' , newUser)
  }

  login(email, password){
    console.log('inside auth service - LOGIN')
    return this.http.post<any>(this.config.baseURL + 'users/authenticate' , {email: email, password: password})
  }

   
}
