var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var userSchema = mongoose.Schema({
   userName: {
      type: String,
      unique: true,
      minLength: 8,
      
      required: true
   },
   password: {
      type: String,
      required: true,
     
   },
   isAdmin:{type:Boolean,default:false},
   orderId:[{
      type:mongoose.Schema.ObjectId,
      ref:"Order"
    }]
//   address(state,postcode,city)
//   Email ,first name 
  
})
userSchema.pre("save", function (next) {

   const y = bcrypt.genSaltSync(10);
   const x= bcrypt.hashSync(this.password, y);
   this.password = x

   next()
})

var userModel = mongoose.model("User", userSchema)

module.exports = userModel