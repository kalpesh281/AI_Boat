const userModel = require("../models/userModel");
const errorResponce = require("../utils/errorResponce");

exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res);
    res.status(statusCode).json({
        success: true,
        token,
    })
}

exports.registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const exisitingEmail = await userModel.findOne({ email })
        if (exisitingEmail) {
            return next(new errorResponce("Email is already register", 500))
        }
        const user = await userModel.create({ username, email, password })
        sendToken(user, 201, res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
exports.loginController = async (req, res, next) => {

    try {

        const { email, password } = req.body
        if (!email || !password) {
            return next(new errorResponce("Provide Email & Password"))
        }
        const user = await userModel.findOne({ email })
        if (!email) {
            return next(new errorResponce("Invalid Creditial", 401))
        }
        const isMatch = await userModel.matchpassword(password)
        if (!isMatch) {
            return next(new errorResponce("Invalid Creditial", 401))
        }
        this.sendToken(user, 201, res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success: true,
        message: "Logout succesfully"
    })
}
