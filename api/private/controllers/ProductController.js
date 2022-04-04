import ProductService from '../services/ProductService';
import ProductValidation from '../validations/ProductValidation';

class ProductController {

	static async all(req, res) {
		try {
			const result = await ProductService.all();
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async getById(req, res) {
		try {
			const result = await ProductService.getById(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async addProduct(req, res) {
		try {
			const value = ProductValidation.add(req);
			if (!value.type){
				console.log(value.message);
				return res.json({type: false, message: value.message});
			}
			const result = await ProductService.addProduct(req);
			return res.json(result);
		}
		catch (error) {
			throw error;
		}
	}
	static async deleteOrRestoreProduct(req, res) {
		try {
			const result = await ProductService.deleteOrRestoreProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default ProductController;