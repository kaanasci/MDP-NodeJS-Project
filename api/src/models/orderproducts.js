/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class OrderProducts extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			OrderProducts.belongsTo(models.Orders, {
				foreignKey: 'orderid'
			});
			OrderProducts.belongsTo(models.Products, {
				foreignKey: 'productid'
			});

		}
	
	}
	OrderProducts.init({
		orderid: DataTypes.INTEGER,
		productid: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'OrderProducts'
	});
	return OrderProducts;
};