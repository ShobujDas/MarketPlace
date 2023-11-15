const Gig = require("../models/gigModel");
const createError = require("../utils/createError");

const createGig = async (req, res, next) => {
    if (!req.isSeller)
        return next(createError(403, "Only sellers can create a gig!"));

    const newGig = new Gig(
        {
        userId: req.userId,
        ...req.body,
    });

    try {
        const savedGig = await newGig.save();
        res.status(201).json({savedGig:savedGig});
    } catch (err) {
        next(err);
    }
};


const deleteGig = async (req, res, next) => {
    console.log(req.params)
    try {
        const gig = await Gig.findById(req.params.id);

        if (!gig) 
            return res.status(404).send("Gig not found");

        if (gig.userId !== req.userId)
            return next(createError(403, "You can delete only your gig!"));

        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).json({massage:"Gig has been deleted!"});
    } catch (err) {
        next(err);
    }
};


const getGig = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) 
            next(createError(404, "Gig not found!"));
        res.status(200).json({gig:gig});
    } catch (err) {
        next(err);
    }
};

const getGigs = async (req, res, next) => {
    const q = req.query;
    const filters = {
        // condition 1 if q.userID exist in  the parameter then set the variable
        ...(q.userId &&
        {
            userId: q.userId
        }),
        // condition 2 if q.cat exist ins the parameter then set the variable
        ...(q.cat &&
        {
            cat: q.cat
        }),
        // condition 3 if q.min exist or if q.max then set the objects in the proparty
        ...((q.min || q.max) &&
        {
            price: {
                // condition 1 if q.min exist 
                ...(q.min &&
                {
                    $gt: q.min  //$gt = greter than
                }),
                ...(q.max &&
                {
                    // condition 1 if q.max exist
                    $lt: q.max     // $it = less than
                }),
            },
        }),
        // condition 3 if q.search exist or if q.max then set the objects in the title
        ...(q.search &&
        {
            title:
            {
                $regex: q.search,  // $regex= regular expression pattern to match
                $options: "i"     //  $options =options for the regular expression
                // "i " is case insensitive
            }
        }),
    };
    try {
        const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
        res.status(200).json({gigs:gigs});
    } catch (err) {
        next(err);
    }
};


module.exports = {
    createGig, deleteGig, getGig, getGigs
}