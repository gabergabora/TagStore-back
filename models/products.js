const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    // name: { type: String, required: true },
    // description: { type: String, required: true },
    // image: { type: String, required: true },
    // price: { type: Number, required: true },
    // sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true },
     title: {type: 'string', required: true},
    title_ar: {type: 'string', required: true},
    brand: {type: 'string', required: true},
    brand_ar: {type: 'string', required: true},
    category: {type: 'string', required: true},
    category_ar: {type: 'string', required: true},
    price: {type: 'number', required: true},
    rating: {
        rate: {type: 'string', required: true, default: 0},
        rateNumber: {type: 'string', required: true, default: 0},
        likes: {type: 'string', required: true, default: 0},
        reviews: {type: 'string', required: true, default: []},
    },
    quantity: {type: 'number', required: true},
    mImage: {type: 'string', required: true, default: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'},
    aImages: {type: 'string', required: true, default: []},

       


},
  { timestamps: true }
);

///Schema#virtual()  function  we can use them to add extra fields to our schema
//populating virtuals

ProductSchema.virtual("seller", {  ////path,model
  ref: "Seller",
  localField: "sellerID",
  foreignField: "_id",
  justOne: true,
});
ProductSchema.set("toJSON", { virtuals: true });  //to get virtual properties in json
module.exports = mongoose.model("Product", ProductSchema);