import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http:HttpClient) { }

  getPosts(){
     return this.http.get('http://localhost:8080/blog/getall');
    
  }
}
