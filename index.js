const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.json({message:"API de usuários"})
});

app.listen(3000, ()=> {
  console.log("API executando!")
})