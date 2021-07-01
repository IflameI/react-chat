import mongoose from 'mongoose';
import Schema from 'mongoose/lib/schema.js';
import Document from 'mongoose/lib/document.js';

const UploadFileSchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    url: String,
    message: { type: Schema.Types.ObjectId, ref: 'Message', require: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  },
  {
    timestamps: true,
  },
);

const UploadFileModel = mongoose.model('UploadFile', UploadFileSchema);

export default UploadFileModel;
