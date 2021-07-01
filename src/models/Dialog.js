import mongoose from 'mongoose';
import Schema from 'mongoose/lib/schema.js';
import Document from 'mongoose/lib/document.js';

const DialogSchema = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: 'User' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  },
  {
    timestamps: true,
  },
);

const DialogModel = mongoose.model('Dialog', DialogSchema);

export default DialogModel;
