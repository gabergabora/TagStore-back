var fs=require("fs");
var productModel=require("../../models/products")

function patchproduct(_id,_title){
  return productModel.findByIdAndUpdate(_id,_title)
    
  }
function getproduct(){
    return productModel.find()
      
    }
function deleteproduct(_id){
   return productModel.findByIdAndRemove(_id)
        
  }
  function postproduct(newdata){
    return productModel.create(newdata)
           
    }
    // exports.getcatProduct = async (req, res) => {
    //   try{
          
    //       //found product in DB
    //       const product = await productModel.findById(req.params.category)
          
    //       if (!product) return res.status(400).json({message: _item.notFound})
          
  //         return res.status(200).json({ product})
      
  //     }catch(error){
      
  //         return res.status(400).json({error})
  //     }
  // }
  // function getcatproduct(category){
  //   return productModel.findOne(category)
           
  //   }

 module.exports ={postproduct,patchproduct,deleteproduct,getproduct}
