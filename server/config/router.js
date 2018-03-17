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
    app.get("/users/lookup/:email", Users.showOneByEmail);

    /**************** REVIEWS ********************/
    app.post("/reviews/create/:veh_id", Questions.create);
    app.get("/reviews/all", Questions.all);
    app.get("/reviews/:id", Questions.oneQuestion)
    app.put("/reviews/up/:question_id", Questions.revUp);
    app.put("/reviews/down/:question_id", Questions.revDown);
    app.delete("/reviews/delete/:rev_id/:veh_id", Questions.deleteReview);
    app.put("/reviews/update/:rev_id", Questions.updateReview);


    /**************** COMMENTS ********************/

    app.post("/reviews/:question_id/comment/new", Questions.newAnswer);
    app.get("/comment/:answer_id", Questions.findAnswer);
    app.put("/comment/up/:id", Questions.commentUp);
    app.put("/comment/down/:id", Questions.commentDown);
    app.get("/comment/all/:question_id", Questions.getAnswers);
    app.get("/comment/all", Questions.allComments);
    app.delete("/comment/delete/:comment_id", Questions.deleteComment)

    /**************** VEHICLES ******************/
    app.post("/vehicle/new", Vehicle.createVehicle);
    app.get("/vehicle/all", Vehicle.vehicleAll);
    app.get("/vehicle/:veh_id", Vehicle.oneVehicle);
    app.delete("/vehicle/remove/:veh_id", Vehicle.deleteVehicle);
    app.put("/vehicle/update/:veh_id", Vehicle.updateVehicle);
    app.get("/vehicle/:veh_id/review", Vehicle.getVehReviews);
    app.get("/vehicle/make/:veh_make", Vehicle.getByMake);
    app.get("/vehicle/model/:veh_model", Vehicle.getByModel);
    app.get("/vehicle/body/:veh_body", Vehicle.getByBody);
    app.get("/vehicle/year/:veh_year", Vehicle.getByYear);



    app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}