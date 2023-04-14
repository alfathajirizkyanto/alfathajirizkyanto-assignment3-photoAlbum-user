'use strict';

const data = [
  {
    title: 'Photos 1',
    caption: 'satuphotos1',
    image_url: 'https://photossatu1.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Photos 2',
    caption: 'duaphotos2',
    image_url: 'https://photosdua2.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Photos 3',
    caption: 'tugaphotos3',
    image_url: 'https://photostiga3.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
  
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Photos', [{
          title: 'Photos 1',
          caption: 'satuphotos1',
          image_url: 'https://photossatu1.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Photos 2',
          caption: 'duaphotos2',
          image_url: 'https://photosdua2.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Photos 3',
          caption: 'tugaphotos3',
          image_url: 'https://photostiga3.com',
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
