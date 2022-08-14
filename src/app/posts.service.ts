import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string = "http://localhost:3000/api/posts";

  constructor(private http:HttpClient) { }

  getAllPosts() {
    return this.http.get<any[]>(this.url);
  }

  getSelected(_id: number){
    return this.http.get<any[]>(this.url + "/" + _id)
  }

  insertPost(type: string, name: string, address: string, image: string, descr: string, open: string) {
    return this.http.post<any[]>(this.url, { 'type': type, 'name': name, 'address': address, 'image': image, 'descr': descr, 'open': open });
  }

  //perform HTTP delete request to /api/posts
  deletePost(_id: number) {
    return this.http.delete<any[]>(this.url + "/" + _id);
  }

  //perform HTTP put request to /api/posts/_id
  updatePost(_id: number, type: string, name: string, address: string, image: string, descr: string, open: string) {
    return this.http.put<any[]>(this.url + "/" + _id, {'type': type, 'name': name, 'address': address, 'image': image, 'descr': descr, 'open': open });
  }
}
