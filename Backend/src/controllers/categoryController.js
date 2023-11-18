const { createCategory, updateCategory, deleteCategory, getCategoryByID, getAllCategory } = require("../services/categoryServices")

// category create
exports.categoryCreate = async (req, res) => {
  let result = await createCategory(req)
  res.status(200).json(result)
}

// category update
exports.categoryUpdate = async (req, res) => {
  let result = await updateCategory(req)
  res.status(200).json(result)
}

// category delete
exports.categoryDelete = async (req, res) => {
  let result = await deleteCategory(req)
  res.status(200).json(result)
}

// category by id
exports.categoryByID = async (req, res) => {
  let result = await getCategoryByID(req)
  res.status(200).json(result)
}

// categories
exports.allCategory = async (req, res) => {
  let result = await getAllCategory(req)
  res.status(200).json(result)
}