/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CockToIngrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',

      },
      cocktail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cocktails',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CockToIngrs');
  },
};
