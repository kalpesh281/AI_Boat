const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const cookie = require("cookie")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Username is Required"]
    },
    email: {
        type: String,
        require: [true, "Emai is Required"]
    },
    password: {
        type: String,
        require: [true, "Password is Required"],
        minlength: [6, "Password  length Should be 6 character long"]
    },
    customerId: {
        type: String,
        default: ""
    },
    subscription: {
        type: String,
        default: ""
    },

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
});

userSchema.methods.matchpassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};

userSchema.methods.getSignedToken = async function (res) {
    const accessToken = JWT.sign({ id: this._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIREIN });
    const refreshToken = JWT.sign({ id: this._id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: process.env.JWT_REFRESH_EXPIREIN });
    res.cookie("refreshToken", `${refreshToken}`, { maxAge: 86400 * 7000, httpOnly: true })
}


const User = mongoose.model('User', userSchema)

module.exports = User