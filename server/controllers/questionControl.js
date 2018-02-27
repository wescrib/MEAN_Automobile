var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer")

class QuestionController {
    create(req,res) {
        // req.body.user = req.session.user_id
        console.log("LOGGED IN USER_ID AND QUESTION DATA:", req.session.user_id,req.body)
        Question.create({content: req.body.content, description: req.body.description, _user: req.session.user_id}, (err, question)=>{
            if(err){
                return res.json(err)
            }
            return res.json(question)
        })
    }
    all(req,res){
        Question.find({}, (err, questions)=>{
            return res.json(questions);
        })
    }
    oneQuestion(req, res){
        Question.findById(req.params.id)
        .populate({path:"_user", model: "User"})            //find creator
        .populate({path: "_answers", model: "Answer",
    populate:{path: "_user", model: "User"
        }})      //find all answers that belong to question
        .exec((err, q)=>{
            if(err){
                return res.json({"error":"Cannot locate post"})
            }
            // for(let i=0; i< q._answers.length-1; i++){
            //     console.log("LIKE PRE-SORT",q._answers[i].like.length)
            //     if(q._answers[i].like.length-1 < q._answers[i+1].like.length-1){
            //         // if(answers[i].like.length == undefined){
            //         //     answers[i].like.length = 0;
            //         // }
            //         let temp=q._answers[i];
            //         q._answers[i] = q._answers[i+1];
            //         q._answers[i+1] = temp;
            //     }
            //     console.log("NEW ORDER",q._answers[i].like.length)
            // }

            console.log(q)
            return res.json(q)
        })
    }

    updateReview(req, res){
        Question.findByIdAndUpdate({_id: req.params.id},req.body,{upsert:false}, function(err, rev){
            if(err){
                console.log("Server update failure")
                return res.json(err);
            }else{
                console.log("Server update success")
                return res.json(rev)
            }
        })
    }

    /*************************************************ANSWERS*************************************************/


    newAnswer(req,res){
        Question.findById(req.params.question_id, (err, question) =>{
            var answer = new Answer(req.body);
            answer._user = req.session.user_id;
            answer._question = req.params.question_id;
            question._answers.push(answer);
            answer.save((err)=>{
                question.save((err)=>{
                    if(err){
                        return res.json(err)
                    }
                    return res.json(answer)
                })
            })
        })
    }
    findAnswer(req,res){
        Answer.findOne({_id: req.params.answer_id}).populate({path:"_user", model:"User"}).exec((err, answer) => {
            if(err){
                return res.json(err);
            }
            return res.json(answer);
        })
    }
    upvote(req, res){
        Answer.findOne({_id: req.params.id},(err,answer)=>{
            console.log("Finding Answer")
            if(err){
                console.log("Answer not found")
                return res.json(err);
            }
            console.log(answer.like.length,"LIKE LENGTH")
            for(let i=0; i<answer.like.length; i++){
                console.log(answer.like[i],"USER i")
                if(req.session.user_id == answer.like[i]){
                    console.log(answer.like[i],"REMOVED")
                    answer.like.splice(i,1);
                    answer.save();
                    return res.json(answer);
                }
            }
            console.log("Answer found!")
            console.log(req.session.user_id)
            if(req.session.user_id){
                console.log("Pushing user_id into array")
                answer.like.push(req.session.user_id);
                console.log("Saving...")
                answer.save((err)=>{
                    if(err){
                        console.log("Save error")
                        return res.json({"status":"Did not save"})
                    }
                    console.log("Save success")
                    return res.json(answer)
                })
            }
        }
    )}
    getAnswers(req,res){
        console.log("FINDING ANSWERS")
        Answer.find({_question: req.params.question_id}, (err, answers)=>{
            console.log("THESE ARE THE ASNWERS: ", answers)
            for(let i=0; i< answers.length-1; i++){
                console.log("LIKE PRE-SORT",answers[i].like.length)
                if(answers[i].like.length-1 < answers[i+1].like.length-1){
                    // if(answers[i].like.length == undefined){
                    //     answers[i].like.length = 0;
                    // }
                    let temp=answers[i];
                    answers[i] = answers[i+1];
                    answers[i+1] = temp;
                }
                console.log("NEW ORDER",answers[i].like.length)
            }
            console.log("SUCCESS", answers)
            return res.json(answers);
        })
    }
}

module.exports = new QuestionController();