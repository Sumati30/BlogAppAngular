import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  addPosts(blogDto:any, imgUrl:File){
    console.log(blogDto, imgUrl);
    
    const formData = new FormData();
    const blogDtoBlob = new Blob([JSON.stringify(blogDto)], { type: "application/json" });

    formData.append("blogDto", blogDtoBlob); // Send JSON as Blob
    formData.append("image", imgUrl);

     return this.http.post('http://localhost:8080/blog/upload', formData, {
      headers: { 
          // ✅ Do NOT set Content-Type manually! Let the browser set it.
      }
  });
    
  }

  getPosts(){
    return this.http.get('http://localhost:8080/blog/getall');
  }
}
