const users = require("../models/userModel");

// user registration service
exports.userRegister = async (req) => {
  try {
    let query = { $or: [{ email: req.body.email }, { username: req.body.username }]}
    const user = await users.findOne(query).count('total')
    
    if(user != 0){
      return { status: 0, code: 200, data: "Username or email already exists" }
    }

    const userCreate = await users.create(req.body)

    return { status: 1, code: 200, data: userCreate }

  } catch (error) {
    return {status: 0, code: 200, data: "something went wrong"}
  }
}

// user login service
exports.userLogin = async (req) => {
  try {

    let query = { email: req.body.email, password: req.body.password }

    const user = await users.findOne(query)
    if (!user) {
      return { status: 0, code: 200, data: "Invalid login" }
    }

    return { status: 1, code: 200, data: user }
    
  } catch (error) {
    return {status: 0, code: 200, data: "something went wrong"}
  }
}