import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  

  post: any = []
  _id: any = "";

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.postsService.getSelected(this._id).subscribe(data => {
      this.post = data
      console.log('this.post: ', this.post)
    });
  };

  deletePost(_id: number){
    this.postsService.deletePost(_id).subscribe(results => {
    location.replace("/home");
    });
  }
}
