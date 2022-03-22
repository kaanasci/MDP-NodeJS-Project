import ProductService from '../services/ProductService';

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
	static async insertProduct(req, res) {
		try {
			const result = await ProductService.insertProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default ProductController;