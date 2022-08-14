import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(
      private list: PostsService,
      private router: Router
    ) { }

    listing: any = []
    
  ngOnInit(): void{
    this.list.getAllPosts().subscribe(data => {
      this.listing = data;
      console.log('this.listing: ', this.listing)
    });
  };

  routeToSelected(index: number){
    console.log('Go to index', index);
    this.router.navigate(['/view', this.listing[index]._id
    ]);
  };
}
