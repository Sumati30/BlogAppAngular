import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  imgArray: any = [];
  url : any = "http://localhost:8080/";
  display: any;
  blogType : any;
  imageUrl: any;
  content: any;
  title: any;
 

  constructor(public blogService:BlogService, public http:HttpClient, private router:Router) { 
    this.blogType = localStorage.getItem("Type");
  }

  ngOnInit(): void {
    this.getDetails();
  }

  submitted = false;

  obj = { title: "", content: "" };
selectedFile: File | null = null;

onFileSelected(event: any) {
    if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0]; // ✅ Capture selected file
    }
}

onSubmit(form: NgForm) {
    if (!this.selectedFile) {
        console.error("Please select an image file.");
        return;
    }

    // ✅ Ensure form values are correctly extracted
    this.obj = {
        title: form.value.title,
        content: form.value.content
    };

    console.log("Submitting:", this.obj, this.selectedFile);
    
    this.blogService.addPosts(this.obj, this.selectedFile).subscribe({
        next: (result) => {
          this.router.navigate(['/home'])
        },
        error: (error) => console.error("Error:", error)
    });
}


  getDetails(){
    this.blogService.getPosts().subscribe(result => {
       this.imgArray=result;
      //  if(this.imgArray.length == 1){
      //   this.imageUrl = this.url + this.imgArray[0]['imgurl'];
      //   this.content = this.imgArray[0]['content'];
      //   this.title = this.imgArray[0]['title'];
      //  }else{
      //  this.imgArray.filter(r => {
      //   if(r['id'] == 103){
      //     this.imageUrl = this.url + r['imgurl'];
      //   }
      //  })
      // }
      
    })
  }

  showDetails(e){
    //console.log(e)
    this.imageUrl = this.url + e['imgurl'];
    this.content = e['content'];
    this.title = e['title'];
  }

}
