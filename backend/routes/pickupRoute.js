const express = require("express");
const { createPickup, getAllPickup } = require("../comtroller/pickupController");
// const { isAuthenticatedUser,authorizeRoles} = require("../middleware/auth");
const isAuthenticatedUser = require("../middleware/auth")

const router = express.Router();



router
.route("/pickups")
.get(getAllPickup);

router
.route("/pickup/new")
.post(createPickup);


module.exports = router;