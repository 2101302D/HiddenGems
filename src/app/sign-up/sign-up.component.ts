import { Component } from '@angular/core';
//import FormBuilder and FormGroup form contents
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myUser } from './myUser';
import { passwordMatchValidator } from './custom.validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  //initialize an FormGroup object call myForm
  myForm!: FormGroup;
  agreed = false;
  newUser : myUser;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {}
  //Construct the FormGroup object using FormBuilder

  ngOnInit() {
    this.myForm = this.fb.group ({
      name: '',
      password: '',
      role: ''
    });
  }

  //Function to invoke an alert
  onSubmit() {
    this.authService.regUser(this.myForm.value.name,
    this.myForm.value.password, this.myForm.value.role).subscribe();
    this.router.navigateByUrl('/login');
    alert("Account Made, Please now login")
    }
}
