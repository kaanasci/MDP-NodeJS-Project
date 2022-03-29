/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('UserRoles', [ {
			userid: 1,
			roleid: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			userid: 2,
			roleid: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('UserRoles', null, {});
	}
};