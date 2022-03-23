import db from '../../src/models';
class OrderService {

	static async completeOrder(req) {
		try {
			const userID = req.authorizedData.id;
			const user = await db.Users.findOne({
				where: {
					id: userID
				},
				include: {
					model: db.Baskets,
					include: {
						model: db.Products
					}
				}
			});
			// create order from the products in basket
			const basket = user.Baskets;
			let quantity = 0;
			let total = 0.00;
			const productIDs = [];
			basket.forEach((value) => {
				quantity += value.quantity;
				total += value.quantity*value.Product.price;
				productIDs.unshift(value.Product.id);
			});
			const details = {
				userid: req.authorizedData.id,
				quantity: quantity,
				total: total,
				status: 'Preparing',
				address: 'MDP Group'
			};
			const order = await db.Orders.create(details);
			// create order product relations
			productIDs.forEach((value) => {
				let IDs = {
					productid: value,
					orderid: order.id
				};
				db.OrderProducts.create(IDs);
			});
			// delete the products from basket
			await db.Baskets.destroy({
				where: {
					userid: req.authorizedData.id
				}
			});
			if (!(order)){
				const result = {
					type: false,
					message: 'ERROR! Order is not created.'
				};
				return result;
			}
			const result = {
				type: true,
				data: order,
				message: 'Order is successfully created.'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}
	
}
export default OrderService;