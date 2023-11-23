const users = require("../models/userModel");
const sellers = require("../models/sellerModel");
const { encryptPass, comparePass } = require("../util/passSecurity");

// user registration service
exports.userRegister = async (req) => {
  try {
    let query = { email: req.body.email }
    const user = await users.findOne(query).count('total')
    
    if(user != 0){
      return { status: 0, code: 200, data: "Email already exists" }
    }

    const seller = await sellers.findOne(query).count('total')

    if (seller != 0) {
      return { status: 0, code: 200, data: "email already exists" }
    }
    let pass = await encryptPass(req.body.password)
    req.body.password = pass
    const userCreate = await users.create(req.body)
    return { status: 1, code: 200, data: userCreate }

  } catch (error) {
    return {status: 0, code: 200, data: "something went wrong"}
  }
}

// user login service
exports.userLogin = async (req) => {
  try {
    let query = { email: req.body.email, isSeller: false }
    const user = await users.findOne(query).select("_id password isSeller")
    if (!user) {
      return { status: 0, code: 200, data: "No user with this email"}
    }
    const passCompare = await comparePass(user.password, req.body.password)
    if (!passCompare) {
      return { status: 0, code: 200, data: "Invalid login" }
    }
    return { status: 1, code: 200, data: user }
    
  } catch (error) {
    return {status: 0, code: 200, data: "something went wrong"}
  }
}

// user delete
exports.userDelete = async (req) => {
  try {
    const userId = req.params.id;
    let deleteUser = await users.deleteOne({_id: userId})
    return { status: 1, code: 200, data: "Account deleted" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// user delete
exports.userUpdate = async (req) => {
  try {
    const userId = req.params.id;
    let update = await users.updateOne({ _id: userId }, req.body)

    return { status: 1, code: 200, data: "Account updated" }


  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get user by id
exports.getUserById = async (req) => {
  try {
    const user = await users.findOne({ _id: req.params.id }).select("_id firstName lastName email img phone country isSeller city road houseNo")
    if (!user) {
      return { status: 0, code: 200, data: "user not found" }
    }

    return { status: 1, code: 200, data: user }
    
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}