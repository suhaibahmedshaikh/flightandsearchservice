"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Chhatrapati Shivaji International Airport",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Goa International Airport",
          cityId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indira Gandhi International Airport",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport",
          cityId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cochin International Airport",
          cityId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chennai International Airport",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysuru Airport",
          cityId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
