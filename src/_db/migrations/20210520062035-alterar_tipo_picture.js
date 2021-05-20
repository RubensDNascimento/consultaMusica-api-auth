'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.changeColumn('Songs', 'picture', {
            type: Sequelize.STRING,
            allowNull: true
          })
    ])
},


  down: async (queryInterface, Sequelize) =>  {
    return Promise.all([
        queryInterface.changeColumn('Songs', 'picture', {
            type: Sequelize.BLOB,
            allowNull: true
        })
    ])
}
};
