const users = require("../models/userModel");
const sellers = require("../models/sellerModel");
const { encryptPass, comparePass } = require("../util/passSecurity");
const { createToken } = require("../util/jwt");

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
    return { status: 1, code: 200, data: "Account created" }

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
    let token = createToken({ email: req.body.email, id: user['_id'].toString(), isSeller: user['isSeller'] })
    return { status: 1, code: 200, data: user, token }
    
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
    const userId = req.headers.id;
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

// user profile
exports.profile = async (req) => {
  try {
    let id = req.headers.id

    let matchStage = { $match: { _id: id, isSeller: false }}
    let getOrderStage = {
      $lookup: {
        from: 'orders',
        localField: '_id',
        foreignField: 'buyerId',
        as: 'orders'
      }
    }

    let unwindOrder = {
      $unwind: {
        path: '$orders',
        preserveNullAndEmptyArrays: true
      }
    }

    let getGigFromOrder = {
      $lookup: {
        from: 'gigs',
        localField: 'orders.gigId',
        foreignField: '_id',
        as: 'gigs'
      }
    }

    let unwindGig = {
      $unwind: {
        path: '$seller',
        preserveNullAndEmptyArrays: true
      }
    }

    let projecttion = {
      $project: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        img: 1,
        country: 1,
        phone: 1,
        decs: 1,
        isSeller: 1,
        city: 1,
        road: 1,
        houseNo: 1,
        'orders._id': '$orders._id',
        'orders.title': '$orders.title',
        'orders.img': '$orders.img',
        'orders.price': '$orders.price',
        'orders.isCompleted': '$orders.isCompleted',
        'gigs._id': '$gigs._id',
        'gigs.title': '$gigs.title',
        'gigs.desc': '$gigs.desc',
        'gigs.price': '$gigs.price',
        'gigs.cover': '$gigs.cover',
        'gigs.deliveryTime': '$gigs.deliveryTime',
        'gigs.features': '$gigs.features',
        'seller.serviceName': '$seller.serviceName',
        'seller.img': '$seller.img'
      }
    }

    // const profileData = await users.aggregate([matchStage, getOrderStage, unwindOrder, getGigFromOrder, unwindGig, projecttion]);
    const profile = await users.findOne({ _id: id }).select("firstName lastName email img country phone decs isSeller city road houseNo");

    return { status: 1, code: 200, data: profile }
    
  } catch (error) {
    console.log(error)
    return { status: 0, code: 200, data: "something went wrong" }
  }
}