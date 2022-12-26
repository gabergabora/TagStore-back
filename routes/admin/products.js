var express = require('express');
 //var  productModel = require("../../models/products")
var jwt = require("jsonwebtoken");
var router = express.Router();
const fs = require("fs");
var productModel=require("../../models/products")
var {authseller}=require("../../middlewares/auth1")

var bcrypt = require('bcrypt');
//var {auth,verifytokenandauth}=require("../middlewares/auth")

var {postproduct,patchproduct,deleteproduct,getproduct,getcatproduct} = require("../../controllers/admin/users");



router.get("/", authseller, async function (req, res, next) {
   
try{
    var cat = req.query.category
    
    var product = await productModel.find ({category:{
        $in:{cat},}
    })
    res.json(product);
    }catch(err){
     res.status(404).json("Error:invalide value ")
    }
  
  }) 
router.post("/", async function (req, res, next) {
   try{
  var newuser = req.body;
  
  var result = await postproduct(newuser)
  res.json(result);
  }catch(err){
   res.status(404).json("Error:invalide value ")
  }

}) 
router.patch("/:id", async function (req, res, next) {

    try {
      var userId = req.params.id;
      var statu = req.body;
  
      var founded = await patchproduct(userId, statu);
      res.json(founded);
  
     // res.send("message:”user was edited successfully”, ");
    } catch (err) {
      res.status(422).send(err);
    }
  
  })
  
  router.delete("/:id", async function (req, res) {
    try {
      var userId = req.params.id;
      var found = await deleteproduct(userId);
  
      res.json(found);
    } catch (err) {
      res.status(422).send(err);
    }
  })
  router.get("/", async function (req, res) {
    try {
      var data = await getproduct();
      res.json(data);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
//   router.get("/:cat", async function (req, res) {
//     try {
//       var data = await getproduct();
//       res.json(data);
  
//     } catch (err) {
//       res.status(422).json("nooo");
//     }
//   });
  module.exports = router
