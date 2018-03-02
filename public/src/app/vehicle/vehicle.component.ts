import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { UserService } from '../server/controllers/user.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  currentUser: User=null;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  inSession(){
    this._userService.getUser().subscribe(
      res => {
        console.log(res.json(),"IS LOGGED IN");
        this.currentUser = res.json();
        console.log(this.currentUser)
      }
    )
  }
}
