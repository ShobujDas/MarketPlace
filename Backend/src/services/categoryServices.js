const category = require('../models/categoryModel')

// create category
exports.createCategory = async (req) => {
  try {
    let result = await category.create(req.body)
    return { status: 1, code: 200, data: "category created" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// update category
exports.updateCategory = async (req) => {
  try {
    let result = await category.updateOne({ _id: req.params.id}, req.body)
    return { status: 1, code: 200, data: "category updated" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// delete category
exports.deleteCategory = async (req) => {
  try {
    let result = await category.deleteOne({ _id: req.params.id })
    return { status: 1, code: 200, data: "category deleted" }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get category
exports.getAllCategory = async (req) => {
  try {
    let result = await category.find().select("_id categoryName categoryDesc categoryImg")
    return { status: 1, code: 200, data: result }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}

// get category by id
exports.getCategoryByID = async (req) => {
  try {
    let result = await category.findOne({ _id: req.params.id }).select("_id categoryName categoryDesc categoryImg")
    return { status: 1, code: 200, data: result }

  } catch (error) {
    return { status: 0, code: 200, data: "something went wrong" }
  }
}