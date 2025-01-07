import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: String, required: true },
  ISBN: { type: String, required: true },
  language: { type: String, required: true },
  publisher: { type: String, required: true },
  totalPages: { type: Number, required: true },
  isBorrowed: { type: Boolean, default: false },
  // imageCover: { type: String, required: true },
});

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
