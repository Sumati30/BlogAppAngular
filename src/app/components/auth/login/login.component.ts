import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ConfigService } from '../../../services/config.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService, private config:ConfigService) { }

  ngOnInit(): void {
  }

  userName : any = '';
  password : any = '';

  async loginForm(f:NgForm){
   
    this.auth.login(f.value.email, f.value.password).subscribe(res => {
      let loginDetails = res ;
      console.log('Login details' , loginDetails);
      this.config.setUser(loginDetails);
      this.router.navigate(['']);
      
      }, error => {  
        this.userName = '';
        this.password = '';
        alert(error.error["message"]);  
        console.log(error);
      })
  }
 
    
}


