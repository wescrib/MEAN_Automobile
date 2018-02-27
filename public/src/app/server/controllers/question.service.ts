import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }


  createQuestion(question: Question){
    console.log("sending question to backend")
    return this._http.post("/question/create", question);
  }
  index(questions){
    console.log("reaching to to the backend for post list");
    return this._http.get("/question/all").subscribe(
      res => questions(res.json()),
      err => console.log(err)
    );
  }
  getOneQuestion(id: string, cb){
    console.log("reaching to backend for single post");
    this._http.get("/question/"+id).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }
  like(id:string,cb){
    console.log("hit question service, sending to back end");
    this._http.put("/answer/up/"+id,{}).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    )
  }
  createAnswer(answer: Answer, question_id){
    console.log("sending comment to backend", answer);
    return this._http.post("/question/"+question_id+"/answer/new", answer);
  }

  sortedAnswers(question_id: string, cb){
    console.log(question_id," | question id from service");
    return this._http.get("/answer/all/"+question_id).subscribe(
      res => cb(res.json()),
      err => console.log("ERROR LIST",err)
    )
  }
}
