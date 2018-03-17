import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { Http } from '@angular/http';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
import { Vehicle } from '../../server/models/vehicle';
import { VehicleService } from '../../server/controllers/vehicle.service';

@Component({
  selector: 'app-vehicle-show-all',
  templateUrl: './vehicle-show-all.component.html',
  styleUrls: ['./vehicle-show-all.component.css']
})
export class VehicleShowAllComponent implements OnInit {
  private _uS: UserService;
  private _http: Http;
  currentUser: User = null;
  private _router: Router;

  vehicles: Vehicle[];
  private _vS: VehicleService;

  //search stuff
  private makeSearch: String;
  private modelSearch: String;
  private bodySearch: String;
  private yearSearch: Number;

  constructor(

    _router:Router,
    _uS: UserService,
    _http: Http,
    _vS: VehicleService
  
  ) {
    this._uS = _uS;
    this._http = _http;
    this._router = _router;
    this._vS = _vS;

   }

  ngOnInit() {
    this.vehList();
    this.currentUser;
    this.inSession();
  }

  vehList(){
    console.log("SUBCOMPONENT: SENDING REQUEST TO SERVICE FOR LIST OF VEHICLES");
    this._vS.vehIndex((vehicles)=> this.vehicles = vehicles);
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

  deleteVeh(id: string){
    var conf = confirm("Are you sure you want to delete this vehicle?");
    if(conf == true){
      this._vS.delete(id).subscribe(
        review => this.vehList(),
        error => console.log(error)
      )
    }else{
      console.log("Review was not deleted")
    }
  }

}
