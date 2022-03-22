import express from 'express';
import Account from './account';
import Private from './private';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;

app.use('/account', Account);
app.use('/private', Private);

app.listen(port, () => {
	console.log('App is now running at port ', port);
});
