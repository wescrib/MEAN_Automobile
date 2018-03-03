import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './server/controllers/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './dashboard/content/content.component';
import { QuestionCreateComponent } from './dashboard/question-create/question-create.component';
import { QuestionService } from './server/controllers/question.service';
import { VehicleService } from './server/controllers/vehicle.service'
import { QuestionOneComponent } from './dashboard/question-one/question-one.component';
import { SearchQPipe } from './server/controllers/search-q.pipe';
import { SortPipe } from './server/controllers/sort.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleShowAllComponent } from './vehicle/vehicle-show-all/vehicle-show-all.component';
import { VehicleShowOneComponent } from './vehicle/vehicle-show-one/vehicle-show-one.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    UserLoginComponent,
    DashboardComponent,
    ContentComponent,
    QuestionCreateComponent,
    QuestionOneComponent,
    SearchQPipe,
    SortPipe,
    VehicleComponent,
    VehicleCreateComponent,
    VehicleShowAllComponent,
    VehicleShowOneComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    OrderModule
  ],
  providers: [
    UserService,
    QuestionService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
