import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../server/models/vehicle';
import { VehicleService } from '../../server/controllers/vehicle.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-veh-year',
  templateUrl: './show-veh-year.component.html',
  styleUrls: ['./show-veh-year.component.css']
})
export class ShowVehYearComponent implements OnInit {

  years: Vehicle[];
  veh_year: string
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
    this.subscription = this._route.params.subscribe(params => this.veh_year = params.veh_year);
    this.yearList();
  }

  yearList(){
    console.log(this.veh_year);
    this._vS.getYear(this.veh_year, years => this.years = years);
  }
  
}
