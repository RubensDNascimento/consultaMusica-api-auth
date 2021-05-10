'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        const Op = Sequelize.Op

        return Promise.all([
            queryInterface.bulkDelete('Users', {
                id: {
                    [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
            }),
            queryInterface.changeColumn('Users', 'email', {
                unique: true
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        const Op = Sequelize.Op
        return Promise.all([
            queryInterface.bulkDelete('Users', {
                id: {
                    [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                }
            }),
            queryInterface.changeColumn('Users', 'email')
        ]);
    }
};