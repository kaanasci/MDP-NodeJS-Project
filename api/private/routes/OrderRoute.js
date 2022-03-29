import express from 'express';
import OrderController from '../controllers/OrderController';

const app = express();

app.post('/', OrderController.completeOrder);
app.get('/', OrderController.getOrders);
// eslint-disable-next-line no-undef
module.exports = app;