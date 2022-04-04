import express from 'express';
import ProductController from '../controllers/ProductController';
import {manageRoles} from '../../utils/middleware';

const app = express();

app.get('/', ProductController.all);
app.get('/:id', ProductController.getById);
app.post('/', manageRoles(2), ProductController.addProduct);
app.delete('/:id', manageRoles(1), ProductController.deleteOrRestoreProduct);
// eslint-disable-next-line no-undef
module.exports = app;