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
	static async addProduct(req, res) {
		try {
			const result = await ProductService.addProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
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