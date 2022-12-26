var fs=require("fs");
var userModel=require("../../models/users")
function patchuser(_id,_title){
  return userModel.findByIdAndUpdate(_id,_title)
    
  }
function getuser(){
    return userModel.find()
      
    }
function deleteuser(_id){
   return userModel.findByIdAndRemove(_id)
        
  }
  function postuser(newdata){
    return userModel.create(newdata)
           
    }
    
 module.exports ={postuser,patchuser,deleteuser,getuser}
