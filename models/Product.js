//DEPENDENCIES --> SEQUELIZE//
  const {Model, DataTypes} = require('sequelize');
//IMPORT DATABASE --> CONNECTION//
  const sequelize = require('../config/connection');

//INITIALIZE PRODUCT MODELS --> SEQUELIZE//
  class Product extends Model { }

//FIELDS & RULES --> PRODUCT MODEL//
  Product.init
  ({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'category',
    //     key: 'id'
    //   }
    }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
    }
  );

  module.exports = Product;