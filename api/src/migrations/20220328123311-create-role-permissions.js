'use strict';
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('RolePermissions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			roleid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Roles',
					key: 'id'
				}
			},
			permissionid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Permissions',
					key: 'id'
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('RolePermissions');
	}
};