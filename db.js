const Sequelize = require("sequelize");

const db = new Sequelize(
    process.env.DATABASE_URL,
  
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
