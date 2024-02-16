const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Teams",{
        Id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}