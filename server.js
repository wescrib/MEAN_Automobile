var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var port = 8000;
var app = express();

//middleware
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/client/views");

//FILE UPLOAD BELOW
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));


app.use(express.static(__dirname + "/public/dist"));


//sends raw data as jason data to the backend. this will effect the way you test data in postman
app.use(bodyParser.json());
app.use(session({
    secret: "funtime",
    resave: false,
    saveUninitialized: true
}))

//mongoose
require("./server/config/mongoose.js");

//routes
require("./server/config/router")(app);

app.listen(port, () => console.log("the party is at " + port))