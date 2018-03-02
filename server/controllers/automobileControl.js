var mongoose = require("mongoose");
var User = mongoose.model("User");
var Vehicle = mongoose.model("Vehicle");

class VehicleController {
    //CREATE VEHICLE
    createVehicle(req, res){
        console.log("Attempting to build vehicle");
        console.log("USER LOGGED IN",req.session.user_id);
        Vehicle.create({
            make: req.body.make,
            model: req.body.model,
            type: req.body.type,
            year: req.body.year,
            engineSize: req.body.engineSize,
            hp: req.body.hp,
            body: req.body.body,
            _user: req.session.user_id}, (err, vehicle)=>{
            if(err){
                console.log("SERVER: VEHICLE BUILD FAILURE")
                return res.json(err)
            }
            console.log("SERVER: VEHICLE BUILD SUCCESS")
            return res.json(vehicle)
        })
    }
    //LIST ALL VEHICLES
    vehicleAll(req,res){
        Vehicle.find({}, (err, questions)=>{
            return res.json(questions);
        })
    }
    //FIND ONE VEHICLE
    oneVehicle(req,res){
        Vehicle.findById(req.params.veh_id)
        .populate({path:"_user", model: "User"})
        .populate({path:"_reviews", model: "Question",
            populate:{path: "_user", model: "User"}})
        .exec((err, vehicle) => {
            if(err){
                console.log("Cannot find vehicle by ID")
                return res.json({"error":"Cannot find vehicle by ID"})
            }
            console.log("Vehicle found! =D");
            return res.json(vehicle)
        })
    }
    //VEHICLE DELETE
    deleteVehicle(req,res){
        console.log("Server delete of vehicle ID:", req.params.veh_id)
        Vehicle.deleteOne({_id: req.params.veh_id}, (err, vehicle)=>{
            if(err){
                console.log("Server delete failure")
                res.json(err)
            }
            console.log("Server delete success",vehicle)
            return res.json(vehicle);
        })
    }
    //UPDATE VEHICLE INFO
    updateVehicle(req,res){
        console.log("Server attempt to update");
        Vehicle.findByIdAndUpdate({_id: req.params.veh_id}, req.body,{upsert: false}, (err,veh)=>{
            if(err){
                console.log("Server update error");
                res.json(err);
            }
            console.log("Server update success", veh);
            return res.json(veh);
        });
    }
    //GET REVIEWS FOR VEH
    getVehReviews(req,res){
        console.log("Sever attempt to get reviews for vehicle");
        Vehicle.findById(req.params.veh_id).populate({path:"_reviews", model: "Question", populate:{path: "_user", model: "User"}}).exec((err, veh)=>{
            if(err){
                return res.json(err);
            }
            console.log("Server found vehicle and reviews!")
            return res.json(veh)
        })
    }

}

module.exports = new VehicleController();