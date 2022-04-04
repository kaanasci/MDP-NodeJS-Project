import UserService from '../services/UserService';
import UserValidation from '../validations/UserValidation';

class UserController {

	static async register(req, res) {
		try {
			const value = UserValidation.add(req);
			if (!value.type){
				console.log(value.message);
				return res.json({type: false, message: value.message});
			}
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