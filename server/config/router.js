var Users = require("../controllers/user");
var path = require("path")
var Questions = require("../controllers/questionControl");
var Vehicle = require("../controllers/automobileControl");

module.exports = function(app){
    //****************** USER *********************/
    app.post("/users/create", Users.create);
    app.post("/users/login", Users.authenticate);
    app.get("/session", Users.isLoggedIn);
    app.delete("/logout", Users.logout);
    app.get("/users/all", Users.all);
    app.get("/users/show/:id", Users.showOne);

    /**************** POSTS ********************/
    app.post("/reviews/create", Questions.create);
    app.get("/reviews/all", Questions.all);
    app.get("/reviews/:id", Questions.oneQuestion)

    /**************** COMMENTS ********************/

    app.post("/reviews/:question_id/comment/new", Questions.newAnswer);
    app.get("/comment/:answer_id", Questions.findAnswer);
    app.put("/comment/up/:id", Questions.upvote);
    app.get("/comment/all/:question_id", Questions.getAnswers);

    /**************** VEHICLES ******************/
    app.post("/vehicle/new", Vehicle.createVehicle);
    app.get("/vehicle/all", Vehicle.vehicleAll);
    app.get("/vehicle/:veh_id", Vehicle.oneVehicle);
    app.delete("/vehicle/remove/:veh_id", Vehicle.deleteVehicle);
    app.put("/vehicle/update/:veh_id", Vehicle.updateVehicle);

    app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}