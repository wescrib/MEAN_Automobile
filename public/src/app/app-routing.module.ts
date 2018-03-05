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

const routes: Routes = [
  {
    path: "registration",
    component: UserComponent,
  },
  {
    path:"",
    component: HeaderNavComponent,
    children: [
      {path:"dashboard", component: DashboardComponent},
      {path:"", component: VehicleComponent},
      {path:"vehicle/view/:veh_id", component: VehicleShowOneComponent},
      {path:"review/new/:veh_id", component: QuestionCreateComponent},
      {path:"review/view/:rev_id", component: QuestionOneComponent},
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
