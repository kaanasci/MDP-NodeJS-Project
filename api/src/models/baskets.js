/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Baskets extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Baskets.belongsTo(models.Users, {
				foreignKey: 'userid'
			});
			Baskets.belongsTo(models.Products, {
				foreignKey: 'productid'
			});
		}
	
	}
	Baskets.init({
		userid: DataTypes.INTEGER,
		productid: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Baskets'
	});
	return Baskets;
};