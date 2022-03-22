import db from '../../src/models';
class BasketService {

	static async getByUser(req) {
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
				},
				attributes: {
					exclude: [ 'password' ]
				}
			});
			const basket = user.Baskets;
			let products = [];
			basket.forEach((value) => {
				products.push(value.Product);
			});
			return basket;
		}
		catch (error) {
			throw error;
		}
	}
	static async addProduct(req){
		try {
			const prd = await db.Baskets.findOne({
				where: {
					userid: req.authorizedData.id,
					productid: req.body.productid
				}
			});
			if (prd) {
				const quantity = prd.quantity + req.body.quantity;
				const product = await db.Baskets.update({
					quantity: quantity
				}, {
					where: { 
						userid: req.authorizedData.id,
						productid: req.body.productid
					}
				});
				if (!(product)){
					const result = {
						type: false,
						message: 'ERROR! Product did not added to basket.'
					};
					return result;
				}
				const basket = await db.Baskets.findAll({
					where: {
						userid: req.authorizedData.id
					}
				});
				const result = {
					type: true,
					data: basket,
					message: 'Product is successfully added to basket.'
				};
				return result;
			}
			else {
				const newProduct = {
					userid: req.authorizedData.id,
					productid: req.body.productid,
					quantity: req.body.quantity
				};
				const product = await db.Baskets.create(newProduct);
				if (!(product)){
					const result = {
						type: false,
						message: 'ERROR! Product did not added to basket.'
					};
					return result;
				}
				const result = {
					type: true,
					data: product,
					message: 'Product is successfully added to basket.'
				};
				return result;
			}
		}
		catch (error) {
			throw error;
		}
	}
	static async deleteProduct(req){
		try {
			const productID = req.params.id;
			const deleted = await db.Baskets.destroy({
				where: {
					userid: req.authorizedData.id,
					productid: productID
				}
			});
			console.log(deleted);
			if (deleted === 0){
				const result = {
					type: false,
					message: 'ERROR! Product did not deleted from the basket.'
				};
				return result;
			}
			const result = {
				type: true,
				message: 'Product is successfully deleted from the basket.'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}
	
}
export default BasketService;