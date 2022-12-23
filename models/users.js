var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var userSchema = mongoose.Schema({
   userFirstName: {type: String,  unique: true, required: true },
   userlastName: { type: String, unique: true,  required: true },
   EmailAddress: { type: String,  unique: true, required: true},
   
  
   password: {type: String,  required: true },
   isAdmin:{type:Boolean,default:false},
   orderId:[{ type:mongoose.Schema.ObjectId, ref:"Order" }],
    state:{ type: String,required: true},
    city:{type: String, required: true},
     postalcode:{type: String,required: true}

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