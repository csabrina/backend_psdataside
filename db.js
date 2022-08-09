const Sequelize = require("sequelize");

const db = new Sequelize(
    "",
  
  {
  
  dialect: "postgres",
    dialectOptions: {
        ssl: {
          rejectUnauthorized: false
    } 
},

define: {
   freezeTableName: true 
    } 
  }
);

module.exports = db;
