import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../server/models/vehicle';
import { User } from '../../server/models/user';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { QuestionService } from '../../server/controllers/question.service';

@Component({
  selector: 'app-vehicle-show-one',
  templateUrl: './vehicle-show-one.component.html',
  styleUrls: ['./vehicle-show-one.component.css']
})
export class VehicleShowOneComponent implements OnInit {
  veh_id: string;
  vehicle: Vehicle = new Vehicle;
  currentUser: User=null;
  subscription: Subscription;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _uS: UserService,
    private _vS: VehicleService,
    private _rS: QuestionService
    
  ) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => this.veh_id = params.veh_id);
    this.getOneVeh();
    this.currentUser;
    this.inSession();

  }

  getOneVeh(){
    console.log("SUBCOMPONENT: SENDING INFO TO SERVICE");
    this._vS.getOneVeh(this.veh_id, vehicle => this.vehicle = vehicle);
    console.log("NUMBER OF REVIEWS", this.vehicle._reviews);
  }

  inSession(){
    this._uS.getUser().subscribe(
      res => {
        console.log(res.json(),"IS LOGGED IN");
        this.currentUser = res.json();
        console.log("NAVIGATION",this.currentUser)
      }
    )
  }

}
