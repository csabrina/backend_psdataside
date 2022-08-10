
let Sequelize = require("sequelize");

const db = require("../db");

const Usuario = db.define("Usuario",
      {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
         
        email: {
        type: Sequelize.STRING,
        allowNull: false
      },
         
        username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

        senha: {
        type: Sequelize.STRING,
        allowNull: false
      }
  }
);

module.exports = Usuario;