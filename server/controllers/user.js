var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var User = mongoose.model("User");
var Question = mongoose.model("Question");

class UsersController {
    create(req, res){
        console.log(req.body)
        User.find({}, (err, users)=>{
            if(users.length == 0){
                console.log("SERVER: NO USERS FOUND")
                req.body.accountType = 1;
                User.create(req.body, (err, admin) => {
                    if(err){
                        return res.json(err);
                    }
                    req.session.user_id = admin._id;
                    console.log("Server create Admin")
                    return res.json(admin);
                })
            }else{
                User.findOne({ email: req.body.email },(err, user) => {
                    if (user){
                        return res.json({error: "user is already in the database"});
                    }else{
                        console.log("SERVER: CREATING REGULAR USER");
                        User.create(req.body, (err, newUser) => {
                            if(err){
                                return res.json(err);
                            }
                            req.session.user_id = newUser._id;
                            return res.json(newUser);
                        })
                    }
                })
            }
        })    
    }
    authenticate(req,res){
        if(req.body.email == "" || req.body.password == ""){                            //if field for email or pass is blank,
            return res.json({"status":"one or both fields has not been filled out"})     //return message saying one or both is blank
        }
        User.findOne({ email: req.body.email }, (err, user) => {                        //if email is input, look up email
            if(user == null){                                                           //if email is not in db,
                return res.json({"status" : "invalid email"});                           //return an error message
            }else{
                if (User.schema.methods.authenticate(req.body.password, user.password)){                      //if email checks out, compare passwords
                    req.session.user_id = user._id;
                    console.log(user.first_name,user.last_name,"has logged in")                                     //log user into session,
                    return res.json(user);                                              //and return success message
                }else{                                                                  //if password does not match,
                    return res.json({"status" : "invalid password"});                   //return error message
                }
            }

        })
    }
    isLoggedIn(req,res){
        if(req.session.user_id){
            User.findById(req.session.user_id, (err, user) => {
                return res.json(user);
            })
        }else{
            return null
        }
    }
    logout(req,res){
        req.session.user_id = null
        return res.json({
            "status" : "user logged out"
        });
    }
    all(req,res,next){
        User.find({}).populate({path:"_questions", model: "Question"}).exec((err, users)=>{
            if(err){
                return res.json(err);
            }
            return res.json(users);
        })
    }
    showOne(req,res){
        User.findById(req.params.id).populate({path:"_questions", model: "Question"}).exec((err, user) => {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        }
    )}

    showOneByEmail(req,res){
        console.log("looking for email")
        User.findOne({email: req.params.email}).populate({path:"_questions", model: "Question"}).exec((err, user) => {
            if(err){
                return res.json(err);
            }
            return res.json(user);
        }
    )}
    
}

module.exports = new UsersController();