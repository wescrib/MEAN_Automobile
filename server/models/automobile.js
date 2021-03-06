var mongoose = require("mongoose");

var AutoSchema = new mongoose.Schema({
    make:{
        type: String,
        required: [true, "Make is required to build a new car"],
        minlength: [2, "Make must be at least 2 characters"],
        maxlength: [100, "Make cannot be more than 100 characters"]
    },
    model: {
        type: String,
        required: [true, "Model is required to build a new car"],
        minlength: [2, "Model must be at least 2 characters"],
        maxlength: [100, "Model cannot be more than 100 characters"]
    },
    type:{
        type: String,
        default: null,
        // minlength: [2, "Type must be at least 2 characters"],
        maxlength: [100, "Doubt the type needs to be longer than 100 characters"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        minlength: [4, "Year must be no more and no less than 4 digits"],
        maxlength: [4, "Year must be no more and no less than 4 digits"]
    },
    engineSize: {
        type: Number,
        required: false,
        maxlength: 2
    },
    hp: {
        type: Number,
        required: false,
        
    },
    body: {
        type: String,
        required: [true, "Body is required"],
        minlength: [3, "Body needs to be at least 3 character"],
        maxlength: [20, "Body is likely not more than 20 characters"]
    },
    src: {
        type: String,
        required: [true, "Missing the image"]
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cannot build vehicle because no one is logged in"],
        ref: "User"
    },
    _reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
        }]
    
    
}, {timestamps: true})

let Vehicle = mongoose.model("Vehicle", AutoSchema);