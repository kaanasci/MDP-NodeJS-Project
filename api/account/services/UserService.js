import db from '../../src/models';
import md5 from 'crypto-js/md5';
import jwt from 'jsonwebtoken';
import {secret} from '../../src/config/settings';
class UserService {

	static async register(req) {
		try {
			const hash = md5(req.body.password).toString();
			const newUser = {
				name: req.body.name,
				email: req.body.email,
				password: hash
			};
			/*
			 * const lookup = async (email) => {
			 * 	const user = await db.Users.findOne({where: {
			 * 		email: email
			 * 	}});
			 * 	console.log(user);
			 * 	if (user) {
			 * 		throw new Error('Invalid email');
			 * 	}
			 * };
			 */
			const user = await db.Users.create(newUser);
			if (!(user)){
				const result = {
					type: false,
					message: 'User is not created'
				};
				return result;
			}
			const parseUser = JSON.parse(JSON.stringify(user));
			delete parseUser.password;
			const result = {
				type: true,
				data: parseUser,
				message: 'User is successfully created'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}
	static async login(req) {
		try {
			const hash = md5(req.body.password).toString();
			const user = await db.Users.findOne({where: {email: req.body.email, password: hash}});
			if (!user) {
				const result = {
					type: false,
					message: 'Invalid crediantials'
				};
				return result;
			}
			const token = jwt.sign({ id: user.id }, secret, {
				expiresIn: 86400 // 24 hours
			});
			const parseUser = JSON.parse(JSON.stringify(user));
			delete parseUser.password;
			parseUser.accessToken = token;
			const result = {
				type: true,
				data: parseUser,
				message: 'User is successfully signed in'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}

}
export default UserService;