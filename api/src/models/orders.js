/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Orders extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Orders.belongsTo(models.Users, {
				foreignKey: 'userid'
			});
			Orders.hasMany(models.OrderProducts, {
				foreignKey: 'orderid'
			});
		}
	
	}
	Orders.init({
		userid: DataTypes.INTEGER,
		total: DataTypes.DOUBLE,
		status: DataTypes.STRING,
		address: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Orders'
	});
	return Orders;
};