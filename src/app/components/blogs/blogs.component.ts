import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  imgArray: any = [];
  url : any = "http://localhost:8080/";
  display: any;

  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.blogService.getPosts().subscribe(result => {
       this.imgArray=result;
       this.display = this.url + this.imgArray[0].imgurl;
       console.log(this.imgArray, this.display);
    })
  }

}
