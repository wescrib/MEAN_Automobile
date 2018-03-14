import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  private _userService: UserService;
  private user: User;
  private _router: Router
  errors: string[] = []

  constructor(
    _userService: UserService,
    _router: Router,
    private _http: Http
  ) {
    this._userService = _userService;
    this.user = new User 
    this._router = _router;
  }

  ngOnInit() {
  }

  registerUser(){
    // this._http.get("/users/lookup/"+this.user.email)

    console.log("hit sub service",this.user)
    this._userService.create(this.user).subscribe(
      // res => this._router.navigateByUrl("/"),
      (res)=>{
        if(res.json().error){
          this.errors.length = 0;
          this.errors.push("Email already in use.");
          console.log(this.errors);
        } else {
          this._router.navigateByUrl("/")
        }
      }
      // err => console.log(err)
    )
  }

}
