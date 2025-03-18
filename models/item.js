'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Item extends Model {}
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'Items',
    }
  );
  return Item;
};
