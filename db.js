const Sequelize = require("sequelize");

const db = new Sequelize(
    "postgres://najkwqulirhhxp:dbd72d8874d8ca5851ff696de13fc0f677b75bd75abb1c880f7ed87673db4dcc@ec2-54-225-234-165.compute-1.amazonaws.com:5432/d4m08gt906fldd",
  
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
