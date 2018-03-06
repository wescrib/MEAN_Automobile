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

  getMake(make: string, cb){
    console.log("SERVICE: GETTING MAKE", make);
    this._http.get("/vehicle/make/"+make).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

  getModel(model: string, cb){
    console.log("SERVICE: GETTING MAKE", model);
    this._http.get("/vehicle/model/"+model).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

  getBody(body: string, cb){
    console.log("SERVICE: GETTING BODY", body);
    this._http.get("/vehicle/body/"+body).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

  getYear(year: string, cb){
    console.log("SERVICE: GETTING MAKE", year);
    this._http.get("/vehicle/year/"+year).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

}
