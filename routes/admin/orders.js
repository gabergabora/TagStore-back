var express = require('express');
 var  orderModel = require("../../models/orders")
var jwt = require("jsonwebtoken");
var router = express.Router();
const fs = require("fs");

var bcrypt = require('bcrypt');
var {authuser}=require("../../middlewares/auth")

var {postorder,patchorder,deleteorder,getorder} = require("../../controllers/admin/users");




router.post("/", async function (req, res, next) {
   try{
  var newuser = req.body;
  
  var result = await postorder(newuser)
  res.json(result);
  }catch(err){
   res.status(404).json("Error:invalide value ")
  }

})
router.patch("/:id", async function (req, res, next) {

    try {
      var userId = req.params.id;
      var statu = req.body;
  
      var founded = await patchorder(userId, statu);
      res.json(founded);
  
     // res.send("message:”user was edited successfully”, ");
    } catch (err) {
      res.status(422).send(err);
    }
  
  })
  
  router.delete("/:id",authuser, async function (req, res) {
    try {
      var userId = req.params.id;
      var found = await deleteorder(userId);
  
      res.json(found);
    } catch (err) {
      res.status(422).send(err);
    }
  })
  router.get("/",authuser, async function (req, res) {
    try {
      var data = await getorder();
      res.json(data);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  module.exports = router