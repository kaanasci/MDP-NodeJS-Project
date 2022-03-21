import express from 'express';
import Account from './account';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;

app.use('/account', Account);

app.listen(port, () => {
	console.log('App is now running at port ', port);
});
