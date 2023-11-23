const jwt = require("jsonwebtoken");
const secretkey = process.env.secretkey;

// function to create token
const createToken =(user)=>{
    const token = jwt.sign({user},secretkey,{expiresIn:'7d'})
    return token
}

//fucntioon to verify token
const verifyToken =(token)=>{
    try {
        const decoded = jwt.verify(token,secretkey);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports={
    createToken,verifyToken
}