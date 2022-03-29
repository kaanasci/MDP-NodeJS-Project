/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.removeColumn('Orders', 'quantity');
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.addColumn('Orders', 'quantity', Sequelize.INTEGER);
	}
};
