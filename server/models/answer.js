let mongoose = require("mongoose")

var AnswerSchema = new mongoose.Schema({
    content:{
        type: String,
        required: [true,"Must have content"],
        minlength: [1, "Must have at least one character"],
        maxlength: [255, "Exceeded max length of 255 characters"]
    },
    description:{
        type: String,
        default:"",
        maxlength: 255
    },
    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },

}, { timestamps: true } )

let Answer = mongoose.model("Answer", AnswerSchema);