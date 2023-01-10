'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListMusic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListMusic.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    singer: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ListMusic',
  });
  return ListMusic;
};