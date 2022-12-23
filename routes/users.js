
var express = require('express');
 var  userModel = require("../models/users")
var jwt = require("jsonwebtoken");
var router = express.Router();
const fs = require("fs");

var bcrypt = require('bcrypt');
//var {auth,verifytokenandauth}=require("../middlewares/auth")

var {postuser,patchuser,deleteuser,getuser} = require("../controllers/users");



router.post("/", async function (req, res, next) {
   try{
  var newuser = req.body;
  
  var result = await postuser(newuser)
  res.json(result);
  }catch(err){
   res.status(404).json("Error:invalide value ")
  }

})

router.patch("/:id", async function (req, res, next) {

  try {
    var userId = req.params.id;
    var statu = req.body;

    var founded = await patchuser(userId, statu);
    res.json(founded);

   // res.send("message:”user was edited successfully”, ");
  } catch (err) {
    res.status(422).send(err);
  }

})

router.delete("/:id", async function (req, res) {
  try {
    var userId = req.params.id;
    var found = await deleteuser(userId);

    res.json(found);
  } catch (err) {
    res.status(422).send(err);
  }
})

router.get("/", async function (req, res) {
  try {
    var data = await getuser();
    res.json(data);

  } catch (err) {
    res.status(422).json("nooo");
  }
});





router.post("/login", async function (req, res, next) {
  const { userFirstName, password } = req.body;

  var user = await userModel.findOne({ userFirstName: userFirstName})   

  if (user) {
    var valid = bcrypt.compareSync(password, user.password);
    if (valid) {
      
      var token = jwt.sign({
        data: { userfirstName:userFirstName, userId: user.id }
      }, process.env.SECRET, { expiresIn: '20d' });

      res.json(token)

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
  //       }, process.env.SECRET, { expiresIn: '20d' });

  //  res.json(token)

   
  //  })
module.exports = router