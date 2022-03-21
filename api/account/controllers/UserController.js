import UserService from '../services/UserService';

class UserController {

	static async register(req, res) {
		try {
			const result = await UserService.register(req);
			res.send(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async login(req, res) {
		try {
			const result = await UserService.login(req);
			res.send(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default UserController;