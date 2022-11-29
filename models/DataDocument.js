import mongoose from "mongoose";

const dataDocumentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  info: {
    type: Object,
  },
});

export default mongoose.models.DataDocument ||
  mongoose.model("DataDocument", dataDocumentSchema);
