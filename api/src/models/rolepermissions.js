/* eslint-disable no-undef */
'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class RolePermissions extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		// eslint-disable-next-line no-unused-vars
		static associate(models) {
			// define association here
			
		}
	
	}
	RolePermissions.init({
		roleid: DataTypes.INTEGER,
		permissionid: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'RolePermissions'
	});
	return RolePermissions;
};