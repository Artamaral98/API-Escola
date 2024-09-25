import bcryptjs from "bcryptjs"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [{
        nome: 'John Doe',
        email:'john@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  async down () {

  }
};
