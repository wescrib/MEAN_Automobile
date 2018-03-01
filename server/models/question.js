var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var QuestionSchema = new mongoose.Schema ({
    content:{
        type: String,
        required: [true, "Question has no content"],
        minlength: [6, "Question must be at least 6 characters"],
        maxlength: [5000, "Question size has exceeded max (5000 chars)"],
    },
    description: {
        type: String,
        required: [true, "Review requires a title"],
        minlength: [10, "Minimum character length is 10"],
        maxlength: [100, "Max character lenth is 100"]
    },
    upvote: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is not logged in"],
        ref: "User"
    }],
    downvote: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is not logged in"],
        ref: "User"
    }],
    rating: {
        type: Number,
        required: [true, "You need to rate the vehicle"],
        min: 1,
        max: 5
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is not logged in"],
        ref: "User"
    },
    _answers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
    _vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "You need a vehicle to write about"],
        ref: "Vehicle"
    }
}, { timestamps: true })

let Question = mongoose.model("Question", QuestionSchema);