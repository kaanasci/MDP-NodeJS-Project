import db from '../../src/models';
class ProductService {

	static async all() {
		try {
			const products = await db.Products.findAll();
			return products;
		}
		catch (error) {
			throw error;
		}
	}
	static async getById(req) {
		try {
			const id = req.params.id;
			const products = await db.Products.findOne({where: {
				id: id
			}});
			return products;
		}
		catch (error) {
			throw error;
		}
	}
	static async addProduct(req) {
		try {
			const body = req.body;
			const product = await db.Products.create(body);
			if (!(product)){
				const result = {
					type: false,
					message: 'ERROR! Product is not created.'
				};
				return result;
			}
			const result = {
				type: true,
				data: product,
				message: 'Product is successfully created.'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}
	static async deleteOrRestoreProduct(req){
		try {
			const productID = req.params.id;
			const product = await db.Products.findOne({
				where: {
					id: productID
				}
			});
			if (product){
				const deleted = await db.Products.destroy({
					where: {
						id: productID
					}
				});
				if (deleted === 0){
					const result = {
						type: false,
						message: 'ERROR! Product did not deleted.'
					};
					return result;
				}
				const result = {
					type: true,
					message: 'Product is successfully deleted.'
				};
				return result;
			}
			else {
				const restored = await db.Products.restore({
					where: {
						id: productID
					}
				});
				if (restored){
					const result = {
						type: false,
						message: 'ERROR! Product did not restored.'
					};
					return result;
				}
				const result = {
					type: true,
					message: 'Product is successfully restored.'
				};
				return result;
			}
		}
		catch (error) {
			throw error;
		}
	}

}
export default ProductService;