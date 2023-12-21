const { cookieMaker } = require("../helper/helper");
const { sellerRegister, sellerDelete, getSellerById, sellerUpdate, sellerLogin, getSellerProfile } = require("../services/sellerServices");
const { userRegister, userLogin, userDelete, getUserById, userUpdate, profile } = require("../services/userServices");

const otpModel = require("../models/otpModel");
const sendMail = require("../util/sendMail")
const mailMarkup = require("../util/mailMarkup")

// registration controller
exports.user_register = async (req, res) => {
    let result = await userRegister(req)
    res.status(200).json(result);
}

// login controller
exports.user_login = async (req, res) => {
    let result = await userLogin(req);
    if(result['status'] === 1){
        let cookieOption = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false,
            sameSite: "none",
            secure: true
        }
        res.status(200).cookie("token", result.token, cookieOption).json({
            status: result.status,
            code: result.code,
            data: {
                _id: result.data['_id'],
                isSeller: result.data['isSeller']
            }
        })

        return
    }

    res.status(200).json(result)
}

// user logout
exports.logout = async (req, res) => {

    let cookieOption = {
        expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
        httpOnly: false
    }
    res.cookie('token', "", cookieOption);
    res.status(201).json({ status: 1, code: 200, data: "logout successfull" });
}

// delete user
exports.deleteUser = async (req, res) => {
    let result = await userDelete(req)
    res.status(200).json(result)
}

// delete user
exports.updateUser = async (req, res) => {
    let result = await userUpdate(req)
    res.status(200).json(result)
}

// get user by id
exports.getUser = async (req, res) => {
    let result = await getUserById(req)
    res.status(200).json(result)
}

// user profile
exports.getUserProfile = async (req, res) => {
    let result = await profile(req)
    res.status(200).json(result)
}



// seller register
exports.seller_register = async (req, res) => {
    let result = await sellerRegister(req)
    res.status(200).json(result);
}

// seller login
exports.seller_login = async (req, res) => {
    let result = await sellerLogin(req)

    if(result['status'] == 1){

        let cookieOption = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false
        }
        res.cookie("token", result.token, cookieOption)
        res.status(200).json({
            status: result.status,
            code: result.code,
            data: {
                _id: result.data['_id'],
                isSeller: result.data['isSeller']
            }
        })

        return
    }

    res.status(200).json(result)
}

// delete seller
exports.deleteSeller = async (req, res) => {
    let result = await sellerDelete(req)
    res.status(200).json(result)
}

// delete user
exports.updateSeller = async (req, res) => {
    let result = await sellerUpdate(req)
    res.status(200).json(result)
}

// get seller by id
exports.getSeller = async (req, res) => {
    let result = await getSellerById(req)
    res.status(200).json(result)
}

// get seller profile
exports.sellerProfile = async (req, res) => {
    let result = await getSellerProfile(req)
    res.status(200).json(result)
}


// send otp
exports.sendOtp = async (req, res) =>{
    try {
        // send otp
        let email = req.params.email
        let otpCode = Math.floor(100000 + Math.random() * 900000)

        // inserting otp to database
        await otpModel.create({ email: email, otp: otpCode })
        let send_email = await sendMail(email, mailMarkup.otp_markup(otpCode), "TrustHome account verification", "TrustHome Verification Code")

        res.status(200).json({ status: 1, code: 200, data: "Email sent" })
    } catch (error) {
        res.status(200).json({ status: 0, code: 200, data: "Could not send Email" })
    }
}

// verifying otp
exports.verify_otp = async (req, res) => {
    try {
        let email = req.params.email
        let otp = parseInt(req.params.otp)

        // finding the otp
        let verify = await otpModel.find({ email: email, otp: otp, status: 0 }).count('total')
        let notMatched = await otpModel.find({ email: email, otp: otp, status: 1 })

        if (verify == 1) {
            await otpModel.updateOne({ email: email, otp: otp, status: 0 }, { status: 1 })
            res.status(200).json({ status: 1, code: 200, data: "email verified" })
        }
        else if (notMatched[0].otp != otp) {
            res.status(200).json({ status: 0, code: 200, data: "Otp dont match" })
        }
        else {
            res.status(200).json({ status: 0, code: 200, data: "Otp alreacy used" })
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({ status: 0, code: 200, data: "Something went wrong" })
    }
}