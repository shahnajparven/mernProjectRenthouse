const express = require("express");
const { getAllProducts,getProductDetails,createProduct,updateProduct,deleteProduct,createProductReview, deleteReview, getProductReviews, getAdminProducts} = require("../comtroller/productcontroller");
const { isAuthenticatedUser,authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router
.route("/products")
.get(getAllProducts);

router
.route("/admin/products")
.get(isAuthenticatedUser,authorizeRoles("admin"),getAdminProducts);


router
.route("/product/new")
.post(isAuthenticatedUser,authorizeRoles("user"),createProduct);

router
.route("/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
.get(getProductDetails);



router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(deleteReview);

// router
// .route("/review").put(isAuthenticatedUser,createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);


module.exports = router;