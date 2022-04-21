const express = require("express");
const { createPickup, getAdminPickups } = require("../comtroller/pickupController");
const {isAuthenticatedUser,authorizeRoles} = require("../middleware/auth")

const router = express.Router();



router
.route("/admin/pickups")
.get(isAuthenticatedUser,authorizeRoles("admin"),getAdminPickups);


router
.route("/pickup/new")
.post(createPickup);


module.exports = router;