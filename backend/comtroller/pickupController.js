const Pickup = require("../models/pickupModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");




// Create Pickup request
exports.createPickup = catchAsyncError(async (req, res, next) => {

  const pickup = await Pickup.create(req.body);

  res.status(201).json({
    success: true,
    pickup
  })
});

// get allpickup request (Admin)
exports.getAdminPickups = catchAsyncError(async (req, res, next) => {
  const pickups = await Pickup.find();

  res.status(200).json({
    success: true,
    pickups,
  });
});

