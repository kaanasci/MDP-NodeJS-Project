'use strict';
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('OrderProducts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			orderid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Orders',
					key: 'id'
				}
			},
			productid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Products',
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
		await queryInterface.dropTable('OrderProducts');
	}
};