import OrderService from '../services/OrderService';

class OrderController {

	static async completeOrder(req, res) {
		try {
			const result = await OrderService.completeOrder(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async addProduct(req, res) {
		try {
			const result = await OrderService.addProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}
	static async deleteProduct(req, res) {
		try {
			const result = await OrderService.deleteProduct(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default OrderController;