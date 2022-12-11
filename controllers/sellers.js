var fs=require("fs");
var sellerModel=require("../models/sellers")
function patchseller(_id,_title){
  return sellerModel.findByIdAndUpdate(_id,_title)
    
  }
function getseller(){
    return sellerModel.find()
      
    }
function deleteseller(_id){
   return sellerModel.findByIdAndRemove(_id)
        
  }
  function postseller(newdata){
    return sellerModel.create(newdata)
           
    }
    
 module.exports ={postseller,patchseller,deleteseller,getseller}
