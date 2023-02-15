/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cocktails', 
    //Вызвать фун-ию, возвращающую массив ключей с коктейлями
    
    [{
      name: 'John Doe',
      isBetaMember: false,
    }],

     {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cocktails', null, {});
  },
};
