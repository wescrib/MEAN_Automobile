import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../server/models/vehicle';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-veh-body',
  templateUrl: './show-veh-body.component.html',
  styleUrls: ['./show-veh-body.component.css']
})
export class ShowVehBodyComponent implements OnInit {

  bodies: Vehicle[];
  veh_body: string
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
    this.subscription = this._route.params.subscribe(params => this.veh_body = params.veh_body);
    this.bodyList();
  }

  bodyList(){
    console.log(this.veh_body);
    this._vS.getBody(this.veh_body, bodies => this.bodies = bodies);
  }

}
