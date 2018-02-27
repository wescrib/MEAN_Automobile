import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../server/controllers/question.service';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
import { Question } from '../../server/models/question';
import { UserService } from '../../server/controllers/user.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {
  private _questionService : QuestionService;
  private user: User;
  private _router: Router;
  private question: Question
  private _userService: UserService;
  currentUser: User = null;

  constructor(
    _questionService: QuestionService,
    _router: Router,
    _userService: UserService
  ) {
    this._questionService = _questionService;
    this.question = new Question;
    this._router = _router;
    this._userService = _userService
   }

  ngOnInit() {
    this.currentUser
    this.inSession()
  }

  createQuestion(){
    console.log("creating question in sub-component", this.question);
    this._questionService.createQuestion(this.question).subscribe(
      res => this._router.navigateByUrl("/dashboard"),
      error => console.log(error)
    );
  }
  logout(){
    this._userService.logout().subscribe(res => {this.currentUser = null})
    this._router.navigateByUrl("/");
  }
  inSession(){
    this._userService.getUser().subscribe(
      res => {
        console.log(res.json(),"LOGGED IN");
        this.currentUser = res.json();
        console.log(this.currentUser)
        if(this.currentUser._id == null) {
          this._router.navigateByUrl("/")
        }
      }
    )
  }
}
