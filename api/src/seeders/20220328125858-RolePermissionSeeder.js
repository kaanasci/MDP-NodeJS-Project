/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('RolePermissions', [ {
			roleid: 2,
			permissionid: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			roleid: 2,
			permissionid: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}  ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('RolePermissions', null, {});
	}
};