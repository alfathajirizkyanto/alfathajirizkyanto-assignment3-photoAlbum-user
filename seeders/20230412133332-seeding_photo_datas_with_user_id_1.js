'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Pertama Milik UserID 1',
      caption: 'Foto Pertama milik UserID 1',
      image_url: 'https://photossatu.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },
    {
      title: 'Foto Kedua Milik UserID 1',
      caption: 'Foto kedua milik UserID 1',
      image_url: 'https://photoskedua.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Foto Ketiga Milik UserID 1',
      caption: 'Foto ketiga milik UserID 1',
      image_url: 'https://photosketiga.com',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
