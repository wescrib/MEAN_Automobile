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

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
  },
  {
    path:"dashboard",
    component: DashboardComponent,
  },
  {
    path:"dashboard/post",
    component: QuestionCreateComponent
  },
  {
    path:"dashboard/post/:id",
    component: QuestionOneComponent
  },
  {
    path:"vehicle/build/new",
    component: VehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
