import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    myForm: FormGroup;
    results: any = false;

    constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {}

    ngOnInit() {
        this.myForm = this.fb.group ({
        name: '',
        password: ''
        });
    }

    onSubmit() {
        this.authService.authUser(this.myForm.value.name,
        this.myForm.value.password).subscribe(data => {
            this.results = data;
            if (this.results[0].auth)
            {
                this.authService.setSecureToken(this.myForm.value.name);
                this.authService.setUserRole(this.results[0].role);
                this.router.navigateByUrl('/user');
                alert("Welcome" + " " +  this.myForm.value.name)
            } else{
                alert("Wrong username or password")
                console.log("Wrong username or password")
            }
        });
    }
}
