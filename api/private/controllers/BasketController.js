import BasketService from '../services/BasketService';

class BasketController {

	static async getByUser(req, res) {
		try {
			const result = await BasketService.getByUser(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async addProduct(req, res) {
		try {
			const result = await BasketService.addProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async deleteProduct(req, res) {
		try {
			const result = await BasketService.deleteProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default BasketController;