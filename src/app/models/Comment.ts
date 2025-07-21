import mongoose, { Schema, Document, models } from "mongoose";

export interface IComment extends Document {
  projectId: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
}

const CommentSchema: Schema = new Schema({
  projectId: { type: Number, required: true },
  author: { type: String, required: true },
  avatar: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default models.Comment ||
  mongoose.model<IComment>("Comment", CommentSchema);
