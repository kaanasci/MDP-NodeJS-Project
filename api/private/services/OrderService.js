/* eslint-disable camelcase */
import db from '../../src/models';
class OrderService {

	static async completeOrder(req) {
		const t = await db.sequelize.transaction();
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
			}, { transaction: t });
			// create order from the products in basket
			const basket = user.Baskets;
			let total = 0.00;
			let orderproducts = [];
			for (const product of basket) {
				// check the quantity in stock 
				if (product.quantity<=product.Product.quantity) {
					total += product.quantity*product.Product.price;
					orderproducts.unshift({
						productid: product.Product.id, 
						quantity: product.quantity
					});
					product.Product.quantity -= product.quantity;
					await db.Products.update({
						quantity: product.Product.quantity
					}, {
						where: { 
							id: product.Product.id
						}
					}, { transaction: t });
				}
				else {
					const result = {
						type: false,
						message: `Do not have enough stock of ${product.Product.name}`
					};
					return result;
				}
			}
			const details = {
				userid: req.authorizedData.id,
				total: total,
				status: 'Preparing',
				address: 'MDP Group',
				OrderProducts: orderproducts
			};
			const order = await db.Orders.create(details, {
				include: {
					model: db.OrderProducts
				}
			}, { transaction: t });
			/*
			 * create order product relations
			 * productIDs.forEach((product) => {
			 * 	let IDs = {
			 * 		productid: product,
			 * 		orderid: order.id
			 * 	};
			 * 	db.OrderProducts.create(IDs);
			 * });
			 */
			// delete the products from basket
			await db.Baskets.destroy({
				where: {
					userid: req.authorizedData.id
				}
			}, { transaction: t });
			if (!(order)){
				const result = {
					type: false,
					message: 'ERROR! Order is not created.'
				};
				return result;
			}
			const result = {
				type: true,
				message: 'Order is successfully created.'
			};
			await t.commit();
			return result;
		}
		catch (error) {
			await t.rollback();
		}
	}
	static async getOrders(req) {
		try {
			const userID = req.authorizedData.id;
			const orders = await db.Orders.findAll({
				where: {
					userid: userID
				},
				attributes: [
					'id', 'total', 'address', 'status'
				],
				include: {
					model: db.OrderProducts,
					attributes: [
						'id', 'quantity',
						[ db.Sequelize.fn('trim', db.sequelize.col('OrderProducts.Product.name')), 'product_name' ],
						[ db.Sequelize.fn('', db.sequelize.col('OrderProducts.Product.price')), 'product_price' ]
					],
					include: {
						model: db.Products,
						attributes: []
					}
				}
			});
			if (orders) {
				const result = {
					type: true,
					data: orders,
					message: 'Succesfully got the products.'
				};
				return result;
			}
			else {
				const result = {
					type: false,
					message: 'ERROR! Could not get the products.'
				};
				return result;
			}
		}
		catch (error) {
			throw error;
		}
	}
	// eslint-disable-next-line no-unused-vars
	static async getAllOrders(req) {
		try {
			const orders = await db.Orders.findAll({
				attributes: [
					'id', 'userid', 'total', 'address', 'status'
				],
				include: {
					model: db.OrderProducts,
					attributes: [
						'id', 'quantity',
						[ db.Sequelize.fn('trim', db.sequelize.col('OrderProducts.Product.name')), 'product_name' ],
						[ db.Sequelize.fn('', db.sequelize.col('OrderProducts.Product.price')), 'product_price' ]
					],
					include: {
						model: db.Products,
						attributes: []
					}
				}
			});
			if (orders) {
				const result = {
					type: true,
					data: orders,
					message: 'Succesfully got the orders.'
				};
				return result;
			}
			else {
				const result = {
					type: false,
					message: 'ERROR! Could not get the orders.'
				};
				return result;
			}
		}
		catch (error) {
			throw error;
		}
	}
	
}
export default OrderService;