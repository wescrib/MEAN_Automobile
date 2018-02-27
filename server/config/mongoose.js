var mongoose = require("mongoose");
var fs = require("fs");

mongoose.connect("mongodb://localhost/QnA_V1");
mongoose.Proise = global.Promise;

let models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach((file) => {
    if(file.includes(".js")){
        console.log("loading " + file);
        require(models_path + "/" + file);
    }
})