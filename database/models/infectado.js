'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class infectado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  infectado.init({
    nombre: DataTypes.STRING,
    habilidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'infectado',
  });
  return infectado;
};