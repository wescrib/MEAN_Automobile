let mongoose = require("mongoose")

var AnswerSchema = new mongoose.Schema({
    content:{
        type: String,
        required: [true,"Must have content"],
        minlength: [2, "Must have at least 2 characters"],
        maxlength: [5000, "Exceeded max length of 5000 characters"]
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
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is not logged in"],
        ref: "User"
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },

}, { timestamps: true } )

let Answer = mongoose.model("Answer", AnswerSchema);