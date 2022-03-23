import express from 'express';
import OrderController from '../controllers/OrderController';

const app = express();

app.post('/', OrderController.completeOrder);
// eslint-disable-next-line no-undef
module.exports = app;