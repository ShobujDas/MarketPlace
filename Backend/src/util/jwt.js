const jwt = require("jsonwebtoken");

// function to create token
exports.createToken =(user)=>{
    const token = jwt.sign({ user }, process.env.secretKey,{expiresIn:'1d'})
    return token
}

//fucntioon to verify token
exports.verifyToken =(token)=>{
    try {
        const decoded = jwt.verify(token, process.env.secretKey);
        return decoded;
    } catch (error) {
        return null;
    }
}