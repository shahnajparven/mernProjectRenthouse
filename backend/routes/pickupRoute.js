const express = require("express");
const { createPickup, getAdminPickups, updatePickup, deletePickup } = require("../comtroller/pickupController");
const {isAuthenticatedUser,authorizeRoles} = require("../middleware/auth")

const router = express.Router();



router
.route("/admin/pickups")
.get(isAuthenticatedUser,authorizeRoles("admin"),getAdminPickups);


router
.route("/pickup/new")
.post(createPickup);

router
.route("/pickup/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updatePickup)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deletePickup);



module.exports = router;