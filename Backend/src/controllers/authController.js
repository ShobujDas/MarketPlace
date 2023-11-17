const { userRegister, userLogin, userDelete, getUserById } = require("../services/userServices");

const { createToken, verifyToken } = require("../util/jwt");

// registration controller
exports.register = async (req, res) => {
    let result = await userRegister(req)
    res.status(200).json(result);
}

// login controller
exports.login = async (req, res) => {
   
    let result = await userLogin(req)

    if(result['status'] == 1){

        let cookieOption = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: false
        }

        let tokenPayload = {
            email: result.data.email,
            id: result.data._id
        }

        const token = createToken(tokenPayload)
        res.cookie("token", token, cookieOption)

        res.status(200).json({
            status: result.status,
            code: result.code,
            data: result.data
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

// get user by id
exports.getUser = async (req, res) => {
    let result = await getUserById(req)
    res.status(200).json(result)
}