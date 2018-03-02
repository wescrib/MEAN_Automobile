var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer")
var Vehicle = mongoose.model("Vehicle")

class QuestionController {
    create(req,res) {
        // req.body.user = req.session.user_id
        Vehicle.findById(req.params.veh_id, (err, veh)=>{
            req.body._user = req.session.user_id;
            req.body._vehicle = req.params.veh_id;
            Question.create(req.body, (err, review)=>{
                if(err){
                    console.log("SERVER: FAILED TO CREATE REVIEW");
                    return res.json(err);
                }
                veh._reviews.push(review);
                veh.save((err)=>{
                    if(err){
                        console.log("SERVER: FAILED TO PUSH REVIEW IN VEHICLE TABLE")
                    }
                
                    console.log("SERVER: SUCCESSFULLY CREATED REVIEW");
                    return res.json(review);
                })
            });
        })
    }
    all(req,res){
        console.log("SERVER: FINDING ALL THE REVIEWS...")
        Question.find({})
        .populate({path: "_user", model: "User"})
        .populate({path: "_answers", model:"Answer"})
        .exec((err, questions)=>{
            if(err){
                console.log("SERVER: COULD NOT FIND ANY REVIEWS");
                return res.json(err);
            }
            console.log("SERVER: FOUND ALL THE REVIEWS");
            return res.json(questions);
        })
    }
    oneQuestion(req, res){
        Question.findById(req.params.id)
        .populate({path:"_user", model: "User"})            //find creator
        .populate({path: "_answers", model: "Answer",
    populate:{path: "_user", model: "User"
        }})                                                 //find all answers that belong to question
        .exec((err, q)=>{
            if(err){
                return res.json({"error":"Cannot locate post"})
            }
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

    revUp(req, res){
    Question.findOne({_id: req.params.question_id},(err,review)=>{
            console.log("Finding Review...")
            if(err){
                console.log("Review not found!")
                return res.json(err);
            }
            console.log(review.upvote.length,"upvote LENGTH")
            for(let i=0; i<review.upvote.length; i++){
                console.log(review.upvote[i],"USER i")
                if(req.session.user_id == review.upvote[i]){
                    console.log(review.upvote[i],"REMOVED")
                    review.upvote.splice(i,1);
                    review.save();
                    return res.json(review);
                }
            }
            for(let i=0; i<review.downvote.length; i++){
                console.log("USER",review.downvote[i])
                if(req.session.user_id == review.downvote[i]){
                    console.log(review.downvote[i],"REMOVED")
                    review.downvote.splice(i,1);
                    review.upvote.push(req.session.user_id);
                    review.save();
                    return res.json(review);
                }
            }
            console.log("Review found!")
            console.log(req.session.user_id)
            if(req.session.user_id){
                console.log("Pushing user_id into array")
                review.upvote.push(req.session.user_id);
                console.log("Saving...")
                review.save((err)=>{
                    if(err){
                        console.log("Save error")
                        return res.json({"status":"Did not save"})
                    }
                    console.log("Server upvote success")
                    return res.json(review)
                })
            }
        }
    )}

    revDown(req, res){
        Question.findOne({_id: req.params.question_id},(err,review)=>{
            console.log("Finding Review...")
            if(err){
                console.log("Review not found")
                return res.json(err);
            }
            console.log(review.downvote.length,"downvote LENGTH")
            for(let i=0; i<review.downvote.length; i++){
                console.log("USER",review.downvote[i])
                if(req.session.user_id == review.downvote[i]){
                    console.log(review.downvote[i],"REMOVED")
                    review.downvote.splice(i,1);
                    review.save();
                    return res.json(review);
                }
            }
            for(let i=0; i<review.upvote.length; i++){
                console.log(review.upvote[i],"USER i")
                if(req.session.user_id == review.upvote[i]){
                    console.log(review.upvote[i],"REMOVED")
                    review.upvote.splice(i,1);
                    review.downvote.push(req.session.user_id);
                    review.save();
                    return res.json(review);
                }
            }
            
            console.log("Review found!")
            console.log(req.session.user_id)
            if(req.session.user_id){
                console.log("Pushing user_id into array")
                review.downvote.push(req.session.user_id);
                console.log("Saving...")
                review.save((err)=>{
                    if(err){
                        console.log("Save error")
                        return res.json({"status":"Did not save"})
                    }
                    console.log("Server downvote success")
                    return res.json(review)
                })
            }
        }
    )}

    deleteReview(req,res){
        console.log("Server delete of review ID:", req.params.rev_id)
        Question.deleteOne({_id: req.params.rev_id}, (err, review)=>{
            if(err){
                console.log("Server delete failure")
                res.json(err)
            }
            Answer.deleteMany({_question: req.params.rev_id}, (err, a)=>{
                if(err){
                    console.log("SERVER: COULD NOT DELETE COMMENTS FOR REVIEW")
                    return res.json(err);
                }
                console.log("SERVER: SUCCESS DELETE OF COMMENTS")
            })
            console.log("Server delete success",review)
            return res.json(review);
        })
    }

    updateReview(req,res){
        console.log("SERVER: ATTEMPTING TO UPDATE");
        Question.findByIdAndUpdate({_id: req.params.rev_id}, req.body,{upsert: false}, (err,review)=>{
            if(err){
                console.log("SERVER: UPDATE FAILURE");
                res.json(err);
            }
            console.log("SERVER: UPDATE SUCCESS", review);
            return res.json(review);
        });
    }

    /*************************************************ANSWERS*************************************************/


    newAnswer(req,res){
        Question.findById(req.params.question_id, (err, question) =>{
            var answer = new Answer(req.body);
            if(req.body.content.length > 2){
                answer._user = req.session.user_id;
                answer._question = req.params.question_id;
                console.log(question._answers,"HEELLLOOOOOOOO")
                question._answers.push(answer);
                answer.save((err)=>{
                    question.save((err)=>{
                        if(err){
                            return res.json(err)
                        }
                        return res.json(answer)
                    })
                })
            }else{
                console.log("comment not long enough")
                return res.json({error : "content long enough"})
            }
        })
    }
    findAnswer(req,res){
        console.log("SERVER: ATTEMPTING TO FIND COMMENT")
        Answer.findOne({_id: req.params.answer_id}).populate({path:"_user", model:"User"}).exec((err, answer) => {
            if(err){
                console.log("SERVER: FAILED TO FIND COMMENT")
                return res.json(err);
            }
            console.log("SERVER: FOUND COMMENT!")
            return res.json(answer);
        })
    }
    commentUp(req, res){
        Answer.findOne({_id: req.params.id},(err,answer)=>{
            console.log("Finding Answer...")
            if(err){
                console.log("Answer not found!")
                return res.json(err);
            }
            console.log("SERVER: ANSWER CONTENT: \n",answer)
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
                console.log("Saving..")
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

    commentDown(req, res){
        Answer.findOne({_id: req.params.id},(err,answer)=>{
            console.log("Finding Answer")
            if(err){
                console.log("Answer not found")
                return res.json(err);
            }
            console.log(answer,"SOMETHING SHOULD BE HERE")
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
    allComments(req,res){
        Answer.find({}, (err, answers)=>{
            return res.json(answers);
        })
    }
    //DELETE COMMENT
    deleteComment(req,res){
        console.log("Server delete of Comment ID:", req.params.comment_id)
        Answer.deleteOne({_id: req.params.comment_id}, (err, comment)=>{
            if(err){
                console.log("Server delete failure")
                res.json(err)
            }
            console.log("Server delete success")
            return res.json({status: "delete success!!"});
        })
    }
}

module.exports = new QuestionController();