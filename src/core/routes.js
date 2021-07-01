import bodyParser from 'body-parser';
import updateLastSeen from '../middlewares/updateLastSeen.js';
import checkAuth from '../middlewares/checkAuth.js';
import { loginValidation, registerValidation } from '../utils/validations/index.js';
import cors from 'cors';

import multer from './multer.js';

import { UserCtrl, DialogCtrl, MessageCtrl, UploadFileCtrl } from '../controllers/index.js';

const createRoutes = (app, io) => {
  const UserController = new UserCtrl(io);
  const DialogController = new DialogCtrl(io);
  const MessageController = new MessageCtrl(io);
  const UploadFileController = new UploadFileCtrl();

  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);
  app.use(cors());

  app.get('/user/me', UserController.getMe);
  app.get('/user/verify', UserController.verify);
  app.post('/user/signup', registerValidation, UserController.create);
  app.post('/user/signin', loginValidation, UserController.login);
  app.get('/user/find', UserController.findUsers);
  app.get('/user/:id', UserController.show);
  app.delete('/user/:id', UserController.delete);

  app.get('/dialogs', DialogController.index);
  app.delete('/dialogs/:id', DialogController.delete);
  app.post('/dialogs', DialogController.create);

  app.get('/messages', MessageController.index);
  app.post('/messages', MessageController.create);
  app.delete('/messages', MessageController.delete);

  app.post('/files', multer.single('file'), UploadFileController.create);
  app.delete('/files', UploadFileController.delete);
};

export default createRoutes;
