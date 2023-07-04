import { QueryInterface } from 'sequelize';

module.exports = {
    up: async (queryInterface: QueryInterface, Sequelize: any) => {
        await queryInterface.createTable('answers', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            meal_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            likes: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });

        await queryInterface.addConstraint('answers', {
            fields: ['user_id'],
            type: 'foreign key',
            references: {
                table: 'users',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });

        await queryInterface.addConstraint('answers', {
            fields: ['meal_id'],
            type: 'foreign key',
            references: {
                table: 'meals',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },

    down: async (queryInterface: QueryInterface, Sequelize: any) => {
        await queryInterface.dropTable('answers');
    },
};


