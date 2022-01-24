import { Schema, model } from "mongoose";
import PostInterface from "../interfaces/PostInterface";

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true, lowercase: true },
  content: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

export default model<PostInterface>("Post", PostSchema);
