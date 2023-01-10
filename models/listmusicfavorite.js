'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListMusicFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListMusicFavorite.init({
    UserId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListMusicFavorite',
  });
  return ListMusicFavorite;
};