import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:admin123@cluster0.vy4bz.mongodb.net/chat', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Not Connected to Database ERROR! ', err);
  });
