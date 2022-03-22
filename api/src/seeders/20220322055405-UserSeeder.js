'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [ {
			name: 'Kaan',
			email: 'bkaan@sabanciuniv.edu',
			password: 'e10adc3949ba59abbe56e057f20f883e',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};

