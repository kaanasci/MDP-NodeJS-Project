/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Users.hasMany(models.Baskets, {
				foreignKey: 'userid'
			});
			Users.hasMany(models.Orders, {
				foreignKey: 'userid'
			});
		}
	
	}
	Users.init({
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Users'
	});
	return Users;
};