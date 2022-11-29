import mongoose from "mongoose";

const sellerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pfp: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Seller || mongoose.model("Seller", sellerSchema);
