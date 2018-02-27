var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var QuestionSchema = new mongoose.Schema ({
    content:{
        type: String,
        required: [true, "Question has no content"],
        minlength: [6, "Question must be at least 6 characters"],
        maxlength: [255, "Question size has exceeded max (255 chars)"],
    },
    description: {
        type: String,
        default: ""
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is not logged in"],
        ref: "User"
    },
    _answers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }]
}, { timestamps: true })

let Question = mongoose.model("Question", QuestionSchema);