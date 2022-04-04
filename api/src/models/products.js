/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Products.hasMany(models.Baskets, {
				foreignKey: 'productid'
			});
			Products.hasMany(models.OrderProducts, {
				foreignKey: 'productid'
			});
		}
	
	}
	Products.init({
		name: DataTypes.STRING,
		price: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Products'
	});
	return Products;
};