/* eslint-disable no-undef */
import express from 'express';
import UserController from '../controllers/UserController';

const app = express();

app.post('/register', UserController.register);
app.post('/login', UserController.login);

module.exports = app;
