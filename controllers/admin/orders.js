var fs=require("fs");
var orderModel=require("../../models/orders")

function patchorder(_id,_title){
  return orderModel.findByIdAndUpdate(_id,_title)
    
  }
function getorder(){
    return orderModel.find()
      
    }
function deleteorder(_id){
   return orderModel.findByIdAndRemove(_id)
        
  }
  function postorder(newdata){
    return orderModel.create(newdata)
           
    }
    
 module.exports ={postorder,patchorder,deleteorder,getorder}
