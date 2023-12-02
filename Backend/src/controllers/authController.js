const { cookieMaker } = require("../helper/helper");
const { sellerRegister, sellerDelete, getSellerById, sellerUpdate, sellerLogin } = require("../services/sellerServices");
const { userRegister, userLogin, userDelete, getUserById, userUpdate } = require("../services/userServices");

// registration controller
exports.user_register = async (req, res) => {
    let result = await userRegister(req)
    res.status(200).json(result);
}

// login controller
exports.user_login = async (req, res) => {
    let result = await userLogin(req);
    if(result['status'] === 1){
        let createdCookie = cookieMaker({ email: req.body.email, id: result.data._id, isSeller: result.data.isSeller})
        res.cookie("token", createdCookie.token, createdCookie.cookieOption)
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


// seller register
exports.seller_register = async (req, res) => {
    let result = await sellerRegister(req)
    res.status(200).json(result);
}

// seller login
exports.seller_login = async (req, res) => {
    let result = await sellerLogin(req)

    if(result['status'] == 1){

        let createdCookie = cookieMaker({ email: req.body.email, id: result.data._id, isSeller: result.data.isSeller })

        res.cookie("token", createdCookie.token, createdCookie.cookieOption)

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