var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer")
var Vehicle = mongoose.model("Vehicle")

class QuestionController {
    create(req,res) {
        // req.body.user = req.session.user_id
        Vehicle.findById(req.params.veh_id, (err, veh)=>{
            var review = new Question(req.body);
            review._user = req.session.user_id;
            review._vehicle = req.params.veh_id;
            veh._reviews.push(review);
            review.save((err)=>{
                veh.save((err)=>{
                    if(err){
                        return res.json(err)
                    }
                    return res.json(review)
                })
            })
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
            //     console.log("upvote PRE-SORT",q._answers[i].upvote.length)
            //     if(q._answers[i].upvote.length-1 < q._answers[i+1].upvote.length-1){
            //         // if(answers[i].upvote.length == undefined){
            //         //     answers[i].upvote.length = 0;
            //         // }
            //         let temp=q._answers[i];
            //         q._answers[i] = q._answers[i+1];
            //         q._answers[i+1] = temp;
            //     }
            //     console.log("NEW ORDER",q._answers[i].upvote.length)
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
            console.log(answer.upvote.length,"upvote LENGTH")
            for(let i=0; i<answer.upvote.length; i++){
                console.log(answer.upvote[i],"USER i")
                if(req.session.user_id == answer.upvote[i]){
                    console.log(answer.upvote[i],"REMOVED")
                    answer.upvote.splice(i,1);
                    answer.save();
                    return res.json(answer);
                }
            }
            for(let i=0; i<answer.downvote.length; i++){
                console.log("USER",answer.downvote[i])
                if(req.session.user_id == answer.downvote[i]){
                    console.log(answer.downvote[i],"REMOVED")
                    answer.downvote.splice(i,1);
                    answer.upvote.push(req.session.user_id);
                    answer.save();
                    return res.json(answer);
                }
            }
            console.log("Answer found!")
            console.log(req.session.user_id)
            if(req.session.user_id){
                console.log("Pushing user_id into array")
                answer.upvote.push(req.session.user_id);
                console.log("Saving...")
                answer.save((err)=>{
                    if(err){
                        console.log("Save error")
                        return res.json({"status":"Did not save"})
                    }
                    console.log("Server upvote success")
                    return res.json(answer)
                })
            }
        }
    )}

    downvote(req, res){
        Answer.findOne({_id: req.params.id},(err,answer)=>{
            console.log("Finding Answer")
            if(err){
                console.log("Answer not found")
                return res.json(err);
            }
            console.log(answer.downvote.length,"downvote LENGTH")
            for(let i=0; i<answer.downvote.length; i++){
                console.log("USER",answer.downvote[i])
                if(req.session.user_id == answer.downvote[i]){
                    console.log(answer.downvote[i],"REMOVED")
                    answer.downvote.splice(i,1);
                    answer.save();
                    return res.json(answer);
                }
            }
            for(let i=0; i<answer.upvote.length; i++){
                console.log(answer.upvote[i],"USER i")
                if(req.session.user_id == answer.upvote[i]){
                    console.log(answer.upvote[i],"REMOVED")
                    answer.upvote.splice(i,1);
                    answer.downvote.push(req.session.user_id);
                    answer.save();
                    return res.json(answer);
                }
            }
            
            console.log("Answer found!")
            console.log(req.session.user_id)
            if(req.session.user_id){
                console.log("Pushing user_id into array")
                answer.downvote.push(req.session.user_id);
                console.log("Saving...")
                answer.save((err)=>{
                    if(err){
                        console.log("Save error")
                        return res.json({"status":"Did not save"})
                    }
                    console.log("Server downvote success")
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
                console.log("upvote PRE-SORT",answers[i].upvote.length)
                if(answers[i].upvote.length-1 < answers[i+1].upvote.length-1){
                    // if(answers[i].upvote.length == undefined){
                    //     answers[i].upvote.length = 0;
                    // }
                    let temp=answers[i];
                    answers[i] = answers[i+1];
                    answers[i+1] = temp;
                }
                console.log("NEW ORDER",answers[i].upvote.length)
            }
            console.log("SUCCESS", answers)
            return res.json(answers);
        })
    }
}

module.exports = new QuestionController();