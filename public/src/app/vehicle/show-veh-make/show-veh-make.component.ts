import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../server/models/vehicle';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-veh-make',
  templateUrl: './show-veh-make.component.html',
  styleUrls: ['./show-veh-make.component.css']
})
export class ShowVehMakeComponent implements OnInit {

  makes: Vehicle[];
  veh_make: string
  private _vS: VehicleService;
  subscription: Subscription;
  ;

  constructor(
    _vS: VehicleService,
    private _route: ActivatedRoute
  ) {
    this._vS = _vS;
   }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => this.veh_make = params.veh_make);
    this.makeList();
  }

  makeList(){
    console.log(this.veh_make);
    this._vS.getMake(this.veh_make, makes => this.makes = makes);
  }

}
