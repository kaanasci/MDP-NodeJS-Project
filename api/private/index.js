/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import {secret} from '../src/config/settings';
import Helpers from '../utils/helpers';
import jwt from 'jsonwebtoken';

const app = express();
/*
 * function authenticateToken(req, res, next) {
 * 	const header = req.headers['authorization'];
 * 	if (typeof header !== 'undefined') {
 * 		const bearer = header.split(' ');
 * 		const token = bearer[1];
 * 		req.token = token;
 * 		next();
 * 	} 
 * 	else {
 * 		//If header is undefined return Forbidden (403)
 * 		return res.sendStatus(403);
 * 	}
 * }
 */

// authenticateToken();
function verification(req, res, next){
	const token = req.headers.authorization;

	jwt.verify(token, secret, (err, authorizedData) => {
		if (err){
			return res.sendStatus(401);
		}
		else {
			//If token is successfully verified, we can send the authorized data 
			req.authorizedData = authorizedData;
			next();
		}
	});
}

app.use(async (req, res, next) => {
	verification(req, res, next);
});

const basename = path.basename(__filename);

const folderRoute = `${__dirname}/routes`;
require('fs')
	.readdirSync(folderRoute)
	.filter((file) => {

		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	
	})
	.forEach((file) => {

		const routeName = Helpers.getFileRoute(file);
		app.use(
			`/v1/${routeName}`,
			require(folderRoute + path.sep + file.split('.')[0])
		);
	
	});

module.exports = app;