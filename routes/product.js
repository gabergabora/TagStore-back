const router = require("express").Router();
const productControllers = require("../controllers/product");
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/sellerauth");
const userAuth = require("../middleware/userauth");



///////////////////////////////////// ADD
router.post("/", verifyToken, productControllers.addProducts);

////////////////////////////////////// GET
router.get("/", productControllers.getProducts);


////////////////////////////////// EDIT, DELETE
router.patch("/:id", verifyToken, productControllers.editProduct);
router.delete("/:id", verifyToken, productControllers.deleteProduct);

//////////////////////////////// GET SPECIFIC SELLER PRODUCTS
router.get("/seller/:id", verifyTokenAndAuthorization, productControllers.getSpecificSellerProduct);



module.exports = router;
