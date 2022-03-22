import express from 'express';
import ProductController from '../controllers/ProductController';

const app = express();

app.get('/', ProductController.all);
app.get('/:id', ProductController.getById);
app.post('/', ProductController.insertProduct);
// eslint-disable-next-line no-undef
module.exports = app;