const db = require("./db");
const Usuario = require("./model/Usuario");

/*const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.json({message:"API de usuários"})
});

app.listen(3000, ()=> {
  console.log("API executando!")
});*/

async function sincronizar() { 
  await db.sync()
}
//sincronizar();

async function conectar() {

  try {
    await db.authenticate();
    console.log("Sucesso!");
  } catch (e) {
    console.log(e, "Falhou!");
  }
  };

  async function inserirUsuario() {

    try {
      let usuario1 = {
        email: "teste@gmail.com",
        username:"teste_t",
        senha: "testando"
      };

      await Usuario.create(usuario1);
    } catch (e) {
      console.log(e, "Falhou!")
    }
   }

  async function listarUsuarios() {

    try {
      let usuarios = await Usuario.findAll();
      console.log(usuarios);
    } catch (e) {
      console.log(e);
    }
  }
  
//conectar();
//inserirUsuario();
listarUsuarios();
