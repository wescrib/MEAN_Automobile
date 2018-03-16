import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../../server/models/vehicle';
import { User } from '../../server/models/user';
import { UserService } from '../../server/controllers/user.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  private _vS: VehicleService;
  private _router: Router;
  private vehicle: Vehicle;
  vehicles: Vehicle[];
  private user: User;
  currentUser: User=null;
  private _uS: UserService;
  errors: string[] = []



  constructor(
    _vS: VehicleService,
    _router: Router
  
  ) {
    this._vS = _vS;
    this.vehicle = new Vehicle;
    this._router = _router;
   }

  ngOnInit() {
    this.currentUser
    this.vehList();
  }

  buildVeh(){
    // this.vehicle['type']=data.type
    console.log("SUB-COMPONENT: ATTEMPTING TO BUILD VEHICLE:\n", this.vehicle);
    this._vS.createVehicle(this.vehicle).subscribe(
      // res => this.vehList(),
      // error => console.log(error)
      (res)=>{
        if(res.json().error){
          console.log(res.json().error)
          this.errors.length=0;
          this.errors.push("Vehicle already on record");
          console.log(this.errors);
        }else{
          this.errors.pop();
          this.vehList();
        }
      }
    );
  }

  onUploadStatus($event){
    this.vehicle = $event
  }

  vehList(){
    console.log("SUBCOMPONENT: SENDING REQUEST TO SERVICE FOR LIST OF VEHICLES");
    document.forms["buildVeh"].reset()
    return this._vS.vehIndex((vehicles)=> this.vehicles = vehicles);
  }

  inSession(){
    this._uS.getUser().subscribe(
      res => {
        console.log(res.json(),"LOGGED IN");
        this.currentUser = res.json();
      }
    )
  }

  uploadImg(data){

  }
}
