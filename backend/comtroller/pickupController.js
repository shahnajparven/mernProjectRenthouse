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

// Update Pickup -- Admin

exports.updatePickup = catchAsyncError(async (req, res, next) => {
  let pickup = await Pickup.findById(req.params.id);

  if (!pickup) {
    return next(new ErrorHander("Pickup not found", 404));
  }

  pickup = await Pickup.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    pickup,
  });
});


// Delete Pickup

exports.deletePickup = catchAsyncError(async (req, res, next) => {
  const pickup = await Pickup.findById(req.params.id);

  if (!pickup) {
    return next(new ErrorHander("Pickup not found", 404));
  }

  await pickup.remove();

  res.status(200).json({
    success: true,
    message: "Pickup Delete Successfully",
  });
});

