import { Component, OnInit } from '@angular/core';

//import FormBuilder and FormGroup form contents
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  
  posts: any = [];
  addListing!: FormGroup;
//dependency injection of FormBuilder as an object call fb and NgbModal

  //dependency injection of FormBuilder as an object call fb
  constructor(private postsService: PostsService, private fb: FormBuilder ) {
    // Retrieve posts from the API
  this.postsService.getAllPosts().subscribe(posts => {
    this.posts = posts;
  });
  }

  //Construct the FormGroup object using FormBuilder
  ngOnInit() {
    this.addListing = this.fb.group({
      name: '',
      address: '',
      image: '',
      descr: '',
      open: '',
      type: ''
    });
  }

  //Function to invoke an alert
  onSubmit(){
    this.postsService.insertPost(
      this.addListing.value.type, 
      this.addListing.value.name, 
      this.addListing.value.address, 
      this.addListing.value.image, 
      this.addListing.value.descr, 
      this.addListing.value.open).subscribe(results => {
    location.reload();
    alert("Listing Successful! Your changes has been saved.");
    });
  }
}