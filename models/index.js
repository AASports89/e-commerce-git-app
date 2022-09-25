//DEPENDENCIES --> IMPORT CATEGORIES//
  const Product = require('./Product');
  const Category = require('./Category');
  const Tag = require('./Tag');
  const ProductTag = require('./ProductTag');

//PRODUCTS --> CATEGORIES//
  Product.belongsTo(Category, {
  foreignKey: 'category_id',
  });

//CATEGORY --> PRODUCTS//
  Category.hasMany(Product, {
  foreignKey: 'category_id',
  });

//PRODUCT --> TAGS//
  Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
  });

//PRODUCT-TAGS//
  Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};