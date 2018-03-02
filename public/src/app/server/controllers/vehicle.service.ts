import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vehicle } from '../models/vehicle';

@Injectable()
export class VehicleService {

  constructor(private _http: Http) { }

  createVehicle(veh: Vehicle){
    console.log("SERVICE: SENDING NEW OBJECT TO SERVER")
    return this._http.post("/vehicle/new", veh);
  }
  vehIndex(vehicles){
    console.log("SERVICE: GETTING ALL VEHICLES FROM SERVER")
    return this._http.get("/vehicle/all").subscribe(
      res => vehicles(res.json()),
      err => console.log(err)
    );
  }
  getOneVeh(id: string, cb){
    console.log("SERVICE: GETTING VEH_ID",id,"FROM SERVER");
    this._http.get("/vehicle/"+id).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }
  delVeh(id: string){
    console.log("SERVICE: SENDING REMOVAL TO SERVER");
    this._http.delete("/vehicle/remove/"+id)
  }
  updateVeh(vehicle){
    console.log("SERVICE: SENDING UPDATE TO SERVER");
    return this._http.put("/update/"+vehicle._id, vehicle)
  }
}
