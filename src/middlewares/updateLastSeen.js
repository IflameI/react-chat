import express from 'express';
import { UserModel } from '../models/index.js';

export default (req, __, next) => {
  if (req.user) {
    UserModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        last_seen: new Date(),
      },
      { new: true },
      () => {},
    );
  }
  next();
};
