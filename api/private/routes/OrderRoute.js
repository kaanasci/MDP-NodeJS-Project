import express from 'express';
import OrderController from '../controllers/OrderController';
import {manageRoles} from '../../utils/middleware';
const app = express();

app.post('/', OrderController.completeOrder);
app.get('/', OrderController.getOrders);
app.get('/all', manageRoles(2), OrderController.getAllOrders);
// eslint-disable-next-line no-undef
module.exports = app;