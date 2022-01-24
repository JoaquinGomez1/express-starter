import { Document } from "mongoose";

export default interface PostInterface extends Document {
  title: string;
  url: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
