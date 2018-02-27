var Users = require("../controllers/user");
var path = require("path")
var Questions = require("../controllers/questionControl");

module.exports = function(app){
    //****************** USER *********************/
    app.post("/users/create", Users.create);
    app.post("/users/login", Users.authenticate);
    app.get("/session", Users.isLoggedIn);
    app.delete("/logout", Users.logout);
    app.get("/users/all", Users.all);
    app.get("/users/show/:id", Users.showOne);

    /**************** QUESTIONS ********************/
    app.post("/question/create", Questions.create);
    app.get("/question/all", Questions.all);
    app.get("/question/:id", Questions.oneQuestion)

    /**************** ANSWERS ********************/

    app.post("/question/:question_id/answer/new", Questions.newAnswer);
    app.get("/answer/:answer_id", Questions.findAnswer);
    app.put("/answer/up/:id", Questions.upvote);
    app.get("/answer/all/:question_id", Questions.getAnswers);

    app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}