import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiddenGemsApp';

  posts: any = [];
  currentEvent: any

  constructor(private postsService: PostsService) {
    this.postsService.getAllPosts().subscribe(posts => {
    this.posts = posts;
    });
  }

  fowardEvent($event) { 
    this.currentEvent = $event;}
}
