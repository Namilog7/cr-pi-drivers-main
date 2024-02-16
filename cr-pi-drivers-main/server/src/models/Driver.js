const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob:{
      type: DataTypes.DATE,
      allowNull: false
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};