var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name must be at least 2 characters"],
        minlength: [2,"First name must be at least two characters in length"],
        maxlength: [255, "First name cannot be more than 255 characters in length"]
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2,"Last name must be at least two characters in length"],
        maxlength: [255, "Last name cannot be more than 255 characters in length"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [6, "Email must be at least 6 characters in length"],
        maxlength: [255, "E-mail cannot be more than 255 characters in length"],
        validate: {
            validator: function(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            },
            message: "Email must be in the following format: example@example.com"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters in length"],
        maxlength: [255, "Password length cannot exceed 255 characters"],
        validate: {
            validator: function(value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password must have at least 1 number and 1 uppcase character"
        }
    },
    confirm_pw: {
        type: String,
        required: [true, "Must have password confirmation for registration"],
        validate: {
            validator: function(value){
                return value == this.password;
            },
            message: "Password confirmation does not match password"
        }
    },
    accountType: {
        type: Number,
        default: 0
    },
    _questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }],
    _answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
}, { timestamps: true });

//Hashes new password
UserSchema.methods.hash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

//Saves Password
UserSchema.pre("save", function(done){
    this.password = this.hash(this.password);
    this.confirm_pw = undefined;
    done();
})


//Below compares input password with password in db
UserSchema.methods.authenticate = function(form_pw, password){
    return bcrypt.compareSync(form_pw, password);
}

let User = mongoose.model("User", UserSchema);