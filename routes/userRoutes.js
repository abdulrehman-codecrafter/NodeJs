const express = require('express');
const { doSignUp, doLogin } = require('../controllers/userControllers');

const userRouter = express.Router();    



userRouter.post('/register',doSignUp);
userRouter.post('/login', doLogin);

module.exports = userRouter;
