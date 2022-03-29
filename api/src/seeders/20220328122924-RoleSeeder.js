/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [ {
			role: 'User',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role: 'Admin',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Roles', null, {});
	}
};
