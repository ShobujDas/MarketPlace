const sellers = require("../models/sellerModel");
const users = require("../models/userModel");
const { createToken } = require("../util/jwt");
const { encryptPass, comparePass } = require("../util/passSecurity");

// user registration service
exports.sellerRegister = async (req) => {
  try {
    let query = { $or: [{ email: req.body.email }] }
    const seller = await sellers.findOne(query).count('total')

    if (seller != 0) {
      return { status: 0, code: 200, data: "service name or email already exists" }
    }
    const user = await users.findOne(query).count('total')
    if (user != 0) {
      return { status: 0, code: 200, data: "service name or email already exists" }
    }

    let pass = await encryptPass(req.body.password)
    req.body.password = pass
    const userCreate = await sellers.create(req.body)

    return { status: 1, code: 200, data: userCreate }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// user login service
exports.sellerLogin = async (req) => {
  try {
    let query = { email: req.body.email, isSeller: true }

    const user = await sellers.findOne(query).select("_id password isSeller")
    if(!user){
      return { status: 0, code: 200, data: "No user with this email" }
    }
    const passCompare = await comparePass(user.password, req.body.password)
    if (!passCompare) {
      return { status: 0, code: 200, data: "Invalid login" }
    }
    let token = createToken({ email: req.body.email, id: user['_id'].toString(), isSeller: user['isSeller'] })

    return { status: 1, code: 200, data: user, token }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// user delete
exports.sellerDelete = async (req) => {
  try {
    const sellerId = req.params.id;
    let deleteUser = await sellers.deleteOne({ _id: userId })

    return { status: 1, code: 200, data: "Account deleted" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// seller delete
exports.sellerUpdate = async (req) => {
  try {
    const userId = req.headers.id;
    let update = await sellers.updateOne({ _id: userId }, req.body)

    return { status: 1, code: 200, data: "Account updated" }


  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get user by id
exports.getSellerById = async (req) => {
  try {
    const user = await sellers.findOne({ _id: req.params.id }).select("_id serviceName email img phone decs short_des country isSeller city road houseNo")
    if (!user) {
      return { status: 0, code: 200, data: "user not found" }
    }

    return { status: 1, code: 200, data: user }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get seller profile 
exports.getSellerProfile = async (req) => {
  try {

    const user = await sellers.findOne({ _id: req.headers.id }).select("_id serviceName email img phone decs short_des country isSeller city road houseNo")
    if (!user) {
      return { status: 0, code: 200, data: "user not found" }
    }

    return { status: 1, code: 200, data: user }
  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}