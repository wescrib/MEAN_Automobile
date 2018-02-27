var mongoose = require("mongoose");
var User = mongoose.model("User");
var Auto = mongoose.model("Auto");

class AutoController {

    createAuto(req, res){
        console.log("Attempting to build vehicle");
        Auto.create(req.body, {_user: req.session.user_id}, (err, vehicle)=>{
            if(err){
                return res.json(err)
            }
            return res.json(vehicle)
        })
    }

    vehicleAll(req,res){
        Auto.find({}, (err, questions)=>{
            return res.json(questions);
        })
    }

    oneVehicle(req,res){
        Auto.findById(req.params.id).populate({path:"_user", model: "User"}).exec((err, vehicle) => {
            if(err){
                console.log("Cannot find vehicle by ID")
                return res.json({"error":"Cannot find vehicle by ID"})
            }
            console.log("Vehicle found! =D");
            return res.json(vehicle)
        })
    }

}

module.exports = new QuestionController();