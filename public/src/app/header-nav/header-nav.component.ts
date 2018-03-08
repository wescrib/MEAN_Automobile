import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { Router } from '@angular/router';
import { UserService } from '../server/controllers/user.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  currentUser: User = null;
  private _userService: UserService;
  private _http: Http;
  private _router: Router;
  private user: User;

  constructor(
    _router: Router,
    _userService: UserService,
  ) {
    this._userService = _userService;
    this.user = new User;
   }

  ngOnInit() {
    this.inSession();
    this.currentUser;
  }

  logout(){
    this._userService.logout().subscribe(res => {this.currentUser = null})
    this._router.navigateByUrl("/");
  }

  inSession(){
    this._userService.getUser().subscribe(
      res => {
        console.log(res.json(),"IS LOGGED IN");
        this.currentUser = res.json();
        console.log(this.currentUser.first_name,"is logged in")
      }
    )
  }
  loginUser(){
    console.log("login info hit sub component",this.user)
    this._userService.login(this.user, (res) => {
      console.log(res);
      if(res.status){
        console.log("THIS IS AN ERROR MESSAGE: "+ res)
      }else{
        location.reload()
      }
    }
  )}
}
