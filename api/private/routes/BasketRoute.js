import express from 'express';
import BasketController from '../controllers/BasketController';
import {manageRoles} from '../../utils/middleware';

const app = express();

app.get('/', manageRoles(1), BasketController.getByUser);
app.post('/', BasketController.addProduct);
app.delete('/:id', BasketController.deleteProduct);
// eslint-disable-next-line no-undef
module.exports = app;