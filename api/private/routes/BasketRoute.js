import express from 'express';
import BasketController from '../controllers/BasketController';

const app = express();

app.get('/', BasketController.getByUser);
app.post('/', BasketController.addProduct);
app.delete('/:id', BasketController.deleteProduct);
// eslint-disable-next-line no-undef
module.exports = app;