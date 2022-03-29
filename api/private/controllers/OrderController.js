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
	static async getOrders(req, res) {
		try {
			const result = await OrderService.getOrders(req);
			return res.json(result);
		}
		catch (error) {
			res.send(error);
		}
	}

}

export default OrderController;