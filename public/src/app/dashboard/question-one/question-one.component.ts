import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { QuestionService } from '../../server/controllers/question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Question } from '../../server/models/question';
import { Answer } from '../../server/models/answer';
import { OrderModule, OrderPipe } from 'ngx-order-pipe';
import { User } from '../../server/models/user';


@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
})
export class QuestionOneComponent implements OnInit {
  
  // private _questionService: QuestionService;
  subscription: Subscription;
  question_id: string;
  question: Question = new Question;
  private answer: Answer
  currentUser: User = null;
  answerList: Answer;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _questionService: QuestionService,
    private _orderPipe: OrderPipe
  ) {
    this.answer = new Answer;
  }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => this.question_id = params.rev_id);
    this.getPost();
    this.inSession();
    this.currentUser;
    // this.sortedLikes();

  }

  getPost(){
    console.log("GETTING QUESTION - SUBCOMP", this.question_id);
    this._questionService.getOneQuestion(this.question_id, question => this.question = question)
  }

  upvote(answer_id){
    console.log("COMPONENT: SENDING UPVOTE TO SERVICE");
    this._questionService.upvoteRev(answer_id, res => this.getPost())
  }

  downvoate(answer_id){
    console.log("COMPONENT: SENDING DOWNVOTE TO SERVICE");
    this._questionService.upvoteRev(answer_id, res => this.getPost())
  }
  createAnswer(question_id){
    console.log("creating answer in sub-component", this.answer);
    this._questionService.createAnswer(this.answer, question_id).subscribe(
      // res => this._router.navigateByUrl("/dashboard/post/"+question_id),
      res => res.json(),
      error => console.log(error)
    );
  }

  // sortedLikes(){
  //   console.log("subcomponent reaching service for answers")
  //   console.log(this.question_id)
  //   this._questionService.sortedAnswers(this.question_id,answers => this.answerList=answers);
  // }

  logout(){
    this._userService.logout().subscribe(res => {this.currentUser = null})
    this._router.navigateByUrl("/");
  }
  inSession(){
    this._userService.getUser().subscribe(
      res => {
        console.log(res.json(),"IS LOGGED IN");
        this.currentUser = res.json();
        console.log(this.currentUser)
        if(this.currentUser._id == null) {
          this._router.navigateByUrl("/")
        }
      }
    )
  }
}
