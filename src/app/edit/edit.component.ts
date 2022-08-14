import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  posts: any = []
  _id: any = "";
  editListing!: FormGroup;

  constructor(private postsService: PostsService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editListing = this.fb.group({
      name: '',
      address: '',
      image: '',
      descr: '',
      open: '',
      type: ''
    });
    this._id = this.route.snapshot.paramMap.get('_id');
    this.postsService.getSelected(this._id).subscribe(data => {
      this.posts = data
      console.log('this.post: ', this.posts)
    });
  }

  updatePost(_id: number) {
    var type = (document.getElementById(_id+'_type') as
    HTMLInputElement).value;
    var name = (document.getElementById(_id+'_name') as
    HTMLInputElement).value;
    var address = (document.getElementById(_id+'_address') as
    HTMLInputElement).value;
    var image = (document.getElementById(_id+'_image') as
    HTMLInputElement).value;
    var descr = (document.getElementById(_id+'_descr') as
    HTMLInputElement).value;
    var open = (document.getElementById(_id+'_open') as
    HTMLInputElement).value;
    this.postsService.updatePost(_id, type, name, address, image, descr, open).subscribe(results => {
    location.reload();
    });
    }
}
