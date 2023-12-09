const { createGig, deleteGig, updateGig, getGigById, getAllGigs, getGigByCategory, getGigBySeller } = require("../services/gigServices")

// create gig
exports.gigCreate = async (req, res) => {
    let result = await createGig(req)
    res.status(200).json(result)
}

// delete gig
exports.gigDelete = async (req, res) => {
    let result = await deleteGig(req)
    res.status(200).json(result)
}

// delete gig
exports.gigUpdate = async (req, res) => {
    let result = await updateGig(req)
    res.status(200).json(result)
}

// gig by id
exports.gigById = async (req, res) => {
    let result = await getGigById(req)
    res.status(200).json(result)
}

// get all gigs
exports.AllGig = async (req, res) => {
    let result = await getAllGigs(req)
    res.status(200).json(result)
}

// get gigs by seller
exports.gigBySeller = async (req, res) => {
    let result = await getGigBySeller(req)
    res.status(200).json(result)
}

// gig by category
exports.gigByCategory = async (req, res) => {
    let result = await getGigByCategory(req)
    res.status(200).json(result)
}