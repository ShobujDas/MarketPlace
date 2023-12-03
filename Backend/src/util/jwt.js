const jwt = require("jsonwebtoken");

// function to create token
const createToken =(user)=>{
    const token = jwt.sign({ user }, process.env.secretkey,{expiresIn:'7d'})
    return token
}

//fucntioon to verify token
const verifyToken =(token)=>{
    try {
        const decoded = jwt.verify(token, process.env.secretkey);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports={
    createToken,verifyToken
}