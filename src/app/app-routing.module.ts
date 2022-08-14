import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';//Import the Routes and RouterModule from the @angular/router which holds all the Router APIs
import { HomeComponent } from './home/home.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user/user.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddListingComponent },
  { path: 'signup', component: SignUpComponent },
  { path:'view/:_id', component: ViewComponent},
  { path:'login', component: LoginComponent},
  { path:'edit/:_id', component: EditComponent},
  { path:'user', component: UserComponent, canActivate: [AuthGuard], data: {permission: {only: ["user", "admin"]}}},
  // redirect to home page on load
  { path: '', component: HomeComponent, pathMatch: 'full'}];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)], //mport RouterModule via the imports array and pass in the routes array via the forRoot() method.
  exports: [RouterModule] //Export RouterModule by adding it to the exports array
})
export class AppRoutingModule { }
