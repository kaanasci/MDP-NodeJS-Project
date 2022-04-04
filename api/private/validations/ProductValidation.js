import Joi from 'joi';
class ProductValidation{

	static add(req){
		const schema = Joi.object({
			name: Joi.string().min(5).required(),
			price: Joi.number().integer(),
			quantity: Joi.number().integer()
		});
		const product = schema.validate(req.body);
		if (product.error){
			return {type: false, message: product.error.details[0].message};
		}
		else {
			return {type: true};		
		}
	}

}
export default ProductValidation;