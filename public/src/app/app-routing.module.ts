import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { QuestionCreateComponent } from './dashboard/question-create/question-create.component';
import { Question } from './server/models/question';
import { QuestionOneComponent } from './dashboard/question-one/question-one.component';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleShowOneComponent } from './vehicle/vehicle-show-one/vehicle-show-one.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { ShowVehMakeComponent } from './vehicle/show-veh-make/show-veh-make.component';
import { ShowVehBodyComponent } from './vehicle/show-veh-body/show-veh-body.component';
import { ShowVehYearComponent } from './vehicle/show-veh-year/show-veh-year.component';
import { ShowVehModelComponent } from './vehicle/show-veh-model/show-veh-model.component';
import { VehicleShowAllComponent } from './vehicle/vehicle-show-all/vehicle-show-all.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: "registration",
    component: UserComponent,
  },
  {
    path:"",
    component: HeaderNavComponent,
    children: [
      {path:"", component: HomeComponent},
      {path:"auto/build", component: VehicleCreateComponent},
      {path:"vehicle/makeList/:veh_make", component: ShowVehMakeComponent},
      {path:"vehicle/bodyList/:veh_body", component: ShowVehBodyComponent},
      {path:"vehicle/yearList/:veh_year", component: ShowVehYearComponent},
      {path:"vehicle/modelList/:veh_model", component: ShowVehModelComponent},
      {path:"vehicle/view/:veh_id", component: VehicleShowOneComponent},
      {path:"review/new/:veh_id", component: QuestionCreateComponent},
      {path:"review/view/:rev_id", component: QuestionOneComponent},
      {path:"vehicles/reviews/all", component: VehicleShowAllComponent},
      {path: "kittykatlicklick/about-us", component:AboutUsComponent}
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
