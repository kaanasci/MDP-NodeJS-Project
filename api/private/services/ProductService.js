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
	static async insertProduct(req) {
		try {
			const product = await db.Products.create(req);
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
				message: 'Product is successfuly created.'
			};
			return result;
		}
		catch (error) {
			throw error;
		}
	}

}
export default ProductService;