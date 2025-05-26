import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // openBlogs(){
  //   this.route.navigate['/blogs']
  // }

  create(){
    localStorage.setItem("Type", "create");
    this.router.navigate(['/blogs']);
  }

  update(){
    localStorage.setItem("Type", "update");
    this.router.navigate(['/blogs']);
  }

  read(){
    localStorage.setItem("Type", "read");
    this.router.navigate(['/blogs']);
  }
}
