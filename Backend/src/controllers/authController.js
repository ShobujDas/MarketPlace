const { userRegister, userLogin } = require("../services/userServices");

const { createToken, verifyToken } = require("../util/jwt");

// registration controller
const register = async (req, res) => {
    let result = await userRegister(req)
    res.status(200).json(result);
}

// login controller
const login = async (req, res) => {
   
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

    
    return res.status(201).json({
        massage: "Succesfullly login",
        data: newUser,
    });
}

const logout = (req, res) => {
    //it will ne managed from the frontend because we do not store the token
    // const {token}=req.body;
    // if(!token){
    //     return res.status(400).send({massage:"Give  token"}) ;
    // }
    // const user =verifyToken(token);

    // if(!user){
    //     return res.status(401).send({error:"Invalid userName or Password"});
    // }
    // const index =activetokens.



    // we wil do it in frontend
    return res.status(201).send({ massage: "Logout succesfully" });
}

const deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId)
        if (req.userId !== user._id.toString()) {
            return next(createError(403, "You can delete your account"))
        }
        await User.findByIdAndDelete(userId)
        res.status(200).send("deleted")

    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }

}
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}

module.exports = {
    deleteUser, getUser,register,login,logout
}