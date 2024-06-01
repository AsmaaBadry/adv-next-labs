import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required:true,
    min:4,
    max:20
  },
  category:{
    type: String,
    required:true,
    min:3
  }
});
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;