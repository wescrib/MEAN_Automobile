import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../server/models/vehicle';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-veh-model',
  templateUrl: './show-veh-model.component.html',
  styleUrls: ['./show-veh-model.component.css']
})
export class ShowVehModelComponent implements OnInit {

  models: Vehicle[];
  veh_model: string
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
    this.subscription = this._route.params.subscribe(params => this.veh_model = params.veh_model);
    this.modelList();
  }

  modelList(){
    console.log(this.veh_model);
    this._vS.getModel(this.veh_model, models => this.models = models);
  }

}
