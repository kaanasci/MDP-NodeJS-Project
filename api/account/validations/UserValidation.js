import Joi from 'joi';
class UserValidation{

	static add(req){
		const schema = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(8).regex(/[A-Z]{1}/).regex(/[a-z]{1}/).regex(/[0-9]{1}/).required()
		});
		const user = schema.validate(req.body);
		if (user.error){
			return {type: false, message: user.error.details[0].message};
		}
		else {
			return {type: true};
		}
	}

}
export default UserValidation;