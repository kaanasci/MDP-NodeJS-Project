/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Permissions', [ {
			permission: 'Deleting Product',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'Adding Product',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Permissions', null, {});
	}
};
