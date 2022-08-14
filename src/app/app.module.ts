import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserserviceService } from './userservice.service';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { PostsService } from './posts.service';
import { EditComponent } from './edit/edit.component'
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddListingComponent,
    SignUpComponent,
    ViewComponent,
    LoginComponent,
    EditComponent,
    LogoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UserserviceService, PostsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
