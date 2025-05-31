import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseURL = " https://nodejs-fb-app.herokuapp.com/" ;
  LoginDetails: any[] = [];
  constructor() { }

  setUser(userInfo){
    this.LoginDetails = userInfo;
    console.log("User details from Config", this.LoginDetails)
  }

  getUser(){
    return this.LoginDetails;
  }
}
