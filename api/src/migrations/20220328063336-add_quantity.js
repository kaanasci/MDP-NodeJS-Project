/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('OrderProducts', 'quantity', Sequelize.INTEGER);
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.removeColumn('OrderProducts', 'quantity');
	}
};
