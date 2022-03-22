'use strict';

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Products', [ {
			name: 'Jack and Jones T-shirt',
			price: '129,00',
			quantity: '350',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Mavi Sweatshirt',
			price: '359,00',
			quantity: '150',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Bad Bear Socks',
			price: '39,00',
			quantity: '500',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Nike Shoe',
			price: '869,00',
			quantity: '70',
			createdAt: new Date(),
			updatedAt: new Date()
		}  ], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	}
};
