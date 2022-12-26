var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var sellerSchema = mongoose.Schema({
   sellerId: { type: 'string', required: true },
   email: { type: 'string', required: true },
   password: { type: 'string', required: true },
   Address1: { type: 'string' },
        Address2: { type: 'string' },
        postalCode: { type: 'string' },
        city: { type: 'string', required: true },
        country: { type: 'string' },


   // sellerfirstName: {type: String,  required: true },
   // sellerlastName: { type: String,   required: true },
   // password: { type: String, required: true},
   // EmailAddress: { type: String,  unique: true, required: true},
   //  isAdmin:{type:Boolean,default:false},
   // productId:[{ type:mongoose.Schema.ObjectId, ref:"Product"  }],
   // shopName: {type: String,required: true},
   // BankpName: { type: String,required: true},
   // Bank_Code: {type: String},
   // accountnumber: { type: String, required: true},
   //  state:{ type: String,required: true},
   //  city:{type: String, required: true},
   //   postalcode:{type: String,required: true}

//paypallaccount:{
//    type: String,
  
   
//    required: true
// },



})
sellerSchema.pre("save", function (next) {

   const z = bcrypt.genSaltSync(10);
   const v= bcrypt.hashSync(this.password, z);
   this.password = v

   next()
})

var sellerModel = mongoose.model("Seller", sellerSchema)

module.exports = sellerModel