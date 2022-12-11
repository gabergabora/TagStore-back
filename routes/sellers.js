var express = require('express');
 var  sellerModel = require("../models/sellers")
var jwt = require("jsonwebtoken");
var router = express.Router();
const fs = require("fs");

var bcrypt = require('bcrypt');


var {postseller,patchseller,deleteseller,getseller} = require("../controllers/sellers");



// router.post("/", async function (req, res, next) {
//    try{
//   var newuser = req.body;
//   // newtodo = {title:req.body.title,userId:req.userId}; 
//   var result = await postseller(newuser)
//   res.json(result);
//   }catch(err){
//    res.status(404).json("Error:invalide value ")
//   }

// })
router.post("/", async function (req, res, next) {
  try{
 var newuser = req.body;
 
 var result = await postseller(newuser)
 res.json(result);
 }catch(err){
  res.status(404).json("Error:invalide value ")
 }

})

router.patch("/:id", async function (req, res, next) {

  try {
    var userId = req.params.id;
    var statu = req.body;

    var founded = await patchseller(userId, statu);
    res.json(founded);

   // res.send("message:”user was edited successfully”, ");
  } catch (err) {
    res.status(422).send(err);
  }

})

router.delete("/:id", async function (req, res) {
  try {
    var userId = req.params.id;
    var found = await deleteseller(userId);

    res.json(found);
  } catch (err) {
    res.status(422).send(err);
  }
})
router.get("/", async function (req, res) {
    try {
      var data = await getseller();
      res.json(data);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  
  
  
  
  
  router.post("/login", async function (req, res, next) {
    const { sellerName, password } = req.body;
  
    var seller = await sellerModel.findOne({sellerName: sellerName }).exec()    //thenable object  not instance of promise
  
    if (seller) {
      var valid = bcrypt.compareSync(password, seller.password);
      if (valid) {
        
  var tokenn = jwt.sign({
        data: { sellerName: seller.sellerName, sellerId: seller.id }
      }, process.env.SECRET, { expiresIn: '100h' });

      res.json(tokenn)

    } else {
      res.status(401).json("please insert correct data")
    }} else {
      res.status(401).json("username or password is invalid try again")
    }
  
  
  })
  // router.post("/register", async function (req, res, next) {
  //   const { userName, password } = req.body;
  
    
  //       var token = jwt.sign({
  //         data: { userName: userName }
  //       }, process.env.SECRET, { expiresIn: '1h' });

  //  res.json(token)

   
   // })
module.exports = router